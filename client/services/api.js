import Axios from 'axios';

const apiInstance = Axios.create({
  baseURL: 'http://localhost:8080/api/'
});

export const searchItems = searchParam => {
  return apiInstance.get(`items?search=${searchParam}`)
    .then(res => res.data);
}

export const getItemDetails = itemId => {
  return apiInstance.get(`items/${itemId}`)
    .then(res => res.data);
}