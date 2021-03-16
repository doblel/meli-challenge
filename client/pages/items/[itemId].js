import React from 'react';

export async function getServerSideProps({ params, query }) {
  const { itemId } = params;
  return {
    props: {
      itemId: itemId || null
    }
  }
}

const ItemDetals = (props) => (
<h1>Details page {props.itemId}</h1>
)

export default ItemDetals;