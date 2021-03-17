import React from 'react';
import MetaData from '../../components/MetaData';
import ProductDetail from '../../components/ProductDetail';
import { getItemDetails } from '../../services/api';

export async function getServerSideProps({ params, query }) {
  const { itemId } = params;
  const item = await getItemDetails(itemId);

  return {
    props: {
      itemId: itemId || null,
      item: item || {}
    }
  }
}

const ItemDetals = ({ item }) => (
  <>
    <MetaData item={item} />
    <ProductDetail item={item} />
  </>
)

export default ItemDetals;