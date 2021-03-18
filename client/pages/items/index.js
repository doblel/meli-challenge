import React, { useEffect } from 'react'

import MetaData from '../../components/MetaData'
import ProductList from '../../components/ProductList'
import useAppContext from '../../context'
import { searchItems } from '../../services/api'

const NOT_FOUND = {
  notFound: true
}

export async function getServerSideProps({ params, query }) {
  const { search } = query

  if (!search)
    return NOT_FOUND

  try {
    const { items, categories } = await searchItems(search)

    return {
      props: {
        search,
        items,
        categories
      }
    }
  } catch (err) {
    return NOT_FOUND
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