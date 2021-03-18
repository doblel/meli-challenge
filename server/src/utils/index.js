const CURRENCY_MAPPER = {
  ARS: '$',
  USD: 'US$'
};

const CONDITION_MAPPER = {
  new: 'Nuevo',
  used: 'Usado'
};

const listItemMapper = item => ({
  id: item.id,
  title: item.title,
  price: {
    amount: item.price,
    currency: CURRENCY_MAPPER[item.currency_id],
    decimals: 2
  },
  condition: CONDITION_MAPPER[item.condition],
  address: (item.address && item.address.state_name) || '',
  picture: item.thumbnail,
  freeShipping: item.shipping.free_shipping
});

const itemDetailMapper = item => ({
  id: item.id,
  title: item.title,
  price: {
    amount: item.price,
    currency: CURRENCY_MAPPER[item.currency_id],
    decimals: 2
  },
  condition: CONDITION_MAPPER[item.condition],
  description: item.description,
  soldQuantity: item.sold_quantity,
  freeShipping: item.shipping.free_shipping,
  picture: item.pictures.find(p => p.id === item.thumbnail_id).url || item.thumbnail
});

module.exports = {
  listItemMapper,
  itemDetailMapper
};