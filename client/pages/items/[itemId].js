import React, { useEffect } from 'react'

import MetaData from '../../components/MetaData'
import ProductDetail from '../../components/ProductDetail'
import useAppContext from '../../context'
import { getItemDetails } from '../../services/api'

const NOT_FOUND = {
  notFound: true
}

export async function getServerSideProps({ params, query }) {
  const { itemId } = params

  if (!itemId)
    return NOT_FOUND

  try {
    const { item, categories } = await getItemDetails(itemId);

    if (!item)
      return NOT_FOUND

    return {
      props: {
        item,
        categories
      }
    }
  } catch (err) {
    return NOT_FOUND
  }
}

const ItemDetals = ({ item = {}, categories = [] }) => {
  const { setCategories } = useAppContext()

  useEffect(() => setCategories(categories), [])

  return (
    <>
      <MetaData item={item} />
      <ProductDetail item={item} />
    </>
  )
}
export default ItemDetals