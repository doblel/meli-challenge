import React from 'react';
import MetaData from '../../components/MetaData';
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

const ItemDetals = (props) => (
  <>
    <MetaData item={props.item} />
    <h1>Details page {props.item.title}</h1>
  </>
)

export default ItemDetals;