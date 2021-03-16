const router = require('express').Router();
const meliApi = require('../services/meli');

const listItemMapper = item => ({
  id: item.id,
  title: item.title,
  price: `${item.currency_id} ${parseFloat(item.price).toFixed(2)}`,
  condition: item.condition,
  address: (item.address && item.address.state_name) || 'Location hidden',
  thumbnail: item.thumbnail
});

const itemDetailMapper = item => ({
  id: item.id,
  title: item.title,
  price: `${item.currency_id} ${parseFloat(item.price).toFixed(2)}`,
  condition: item.condition,
  description: item.description,
  soldQuantity: item.sold_quantity,
  image: item.pictures.find(p => p.id === item.thumbnail_id).url || item.thumbnail
});

router.get('/items', async ({ query, ...req }, res) => {
  const { search } = query;
  const data = await meliApi.searchItems(search);
  // update statusCode to follow REST standars if there are no content
  const statusCode = data.results.length ? 200 : 204;

  return res.status(statusCode).json(data.results.map(listItemMapper));
});

router.get('/items/:itemId', async ({ params, ...req }, res) => {
  const { itemId } = params;
  const data = await meliApi.getItemDetails(itemId);

  return res.status(200).json(itemDetailMapper(data));
});

module.exports = router;