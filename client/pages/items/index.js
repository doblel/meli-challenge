import React from 'react';
import MetaData from '../../components/MetaData';
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
    {props.items.map(i => <p>{i.id} - {i.title}</p>)}
  </>
)

export default SearchPage;