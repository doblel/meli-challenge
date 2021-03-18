const router = require('express').Router();
const meliApi = require('../services/meli');

const utils = require('../utils');

router.get('/items', async ({ query, ...req }, res) => {
  try {
    const { search } = query;
    const { results, filters } = await meliApi.searchItems(search);
    const statusCode = results.length ? 200 : 204;
    let categories = [];

    if (!!filters.length) {
      const categoriesFromFilter = filters.find(f => f.id.toLowerCase() === 'category');
      const [category] = categoriesFromFilter.values || {};

      categories = await utils.getCategories(category.id);
    }

    return res.status(statusCode).json({
      items: results.map(utils.listItemMapper),
      categories
    });
  } catch (err) {
    return res.status(400).json({
      err
    });
  }
});

router.get('/items/:itemId', async ({ params, ...req }, res) => {
  try {
    const { itemId } = params;
    const item = await meliApi.getItemDetails(itemId);
    const categories = await utils.getCategories(item.category_id);

    return res.status(200).json({
      item: utils.itemDetailMapper(item),
      categories
    });
  } catch (err) {
    return res.status(400).json({
      err
    });
  }
});

module.exports = router;