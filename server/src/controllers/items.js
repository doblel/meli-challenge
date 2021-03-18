const router = require('express').Router();
const meliApi = require('../services/meli');

const utils = require('../utils');

router.get('/items', async ({ query, ...req }, res) => {
  const { search } = query;
  const { results, filters } = await meliApi.searchItems(search);
  const statusCode = results.length ? 200 : 204;

  let categories = filters.find(f => f.id.toLowerCase() === 'category');
  const [category] = categories.values;
  categories = await meliApi.getCategories(category.id);

  return res.status(statusCode).json({
    items: results.map(utils.listItemMapper),
    categories: categories.path_from_root.map(c => c.name)
  });
});

router.get('/items/:itemId', async ({ params, ...req }, res) => {
  const { itemId } = params;
  const item = await meliApi.getItemDetails(itemId);
  const categories = await meliApi.getCategories(item.category_id);

  return res.status(200).json({
    item: utils.itemDetailMapper(item),
    categories: categories.path_from_root.map(c => c.name)
  });
});

module.exports = router;