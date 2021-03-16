import React from 'react';

export async function getServerSideProps({ params, query }) {
  const { search } = query;
  return {
    props: {
      search: search || null
    }
  }
}

const SearchPage = (props) => (
<h1>Search page {props.search}</h1>
)

export default SearchPage;