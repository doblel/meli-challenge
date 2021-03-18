import React, { useEffect } from 'react'

import MetaData from '../../components/MetaData'
import ProductList from '../../components/ProductList'
import useAppContext from '../../context'
import { searchItems } from '../../services/api'

export async function getServerSideProps({ params, query }) {
  const { search } = query
  const { items, categories } = await searchItems(search)

  if (!search) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      search,
      items,
      categories
    }
  }
}

const SearchPage = ({ search = '', items = [], categories = [] }) => {
  const { setCategories } = useAppContext()

  useEffect(() => setCategories(categories), [])

  return (
    <>
      <MetaData searchParam={search} />
      <ProductList items={items} />
    </>
  )
}

export default SearchPage