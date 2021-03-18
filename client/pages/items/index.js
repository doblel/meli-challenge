import React, { useEffect } from 'react'

import MetaData from '../../components/MetaData'
import ProductList from '../../components/ProductList'
import EmptyState from '../../components/EmptyState'
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
    const { items, categories, err } = await searchItems(search)

    if (err)
      return NOT_FOUND

    return {
      props: {
        search,
        items,
        categories
      }
    }
  } catch (error) {
    return NOT_FOUND
  }
}

const SearchPage = ({ search = '', items = [], categories = [] }) => {
  const { setCategories } = useAppContext()

  useEffect(() => setCategories(categories), [])

  return (
    <>
      <MetaData searchParam={search} />
      {!!items.length && <ProductList items={items} />}
      {!items.length && <EmptyState title="No se encontraron resultados" />}
    </>
  )
}

export default SearchPage