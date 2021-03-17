import React from 'react';
import MetaData from '../../components/MetaData';
import ProductList from '../../components/ProductList';
import { searchItems } from '../../services/api';

export async function getServerSideProps({ params, query }) {
  const { search } = query;
  const items = await searchItems(search);

  return {
    props: {
      search: search || null,
      items: items || []
    }
  }
}

const SearchPage = (props) => (
  <>
    <MetaData searchParam={props.search} />
    <ProductList items={props.items} />
  </>
)

export default SearchPage;