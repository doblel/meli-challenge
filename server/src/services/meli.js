const axios = require('axios');

const meliApi = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
});

const searchItems = (searchParam, limit = 4) => {
  return meliApi.get(`sites/MLA/search?q=${searchParam}&limit=${limit}`)
    .then(res => res.data);
};

const getItemDetails = (itemId) => {
  const itemReq = meliApi.get(`items/${itemId}`);
  const itemDescriptionReq = meliApi.get(`items/${itemId}/description`);

  return axios.all([itemReq, itemDescriptionReq])
    .then(([item, desc]) => ({
      ...item.data,
      description: desc.data.plain_text
    }));
};

const getCategories = (categoryId) => {
  return meliApi.get(`categories/${categoryId}`)
    .then(res => res.data);
}

module.exports = {
  searchItems,
  getItemDetails,
  getCategories
};