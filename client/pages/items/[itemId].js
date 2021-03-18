import React, { useEffect } from 'react'

import MetaData from '../../components/MetaData'
import ProductDetail from '../../components/ProductDetail'
import useAppContext from '../../context'
import { getItemDetails } from '../../services/api'

export async function getServerSideProps({ params, query }) {
  const { itemId } = params
  const { item, categories } = await getItemDetails(itemId)

  return {
    props: {
      item,
      categories
    }
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