import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/ProductList.module.scss';

const ProductItem = ({ data }) => {
  return (
    <div className={styles.product}>
      <Image className={styles.product__image} objectFit="contain" src={data.thumbnail} width="180" height="180" />
      <div className={styles.product__contentWrapper}>
        <p className={styles.product__price}>
          <span>{data.price}</span>
        </p>
        <h2 className={styles.product__title}>{data.title}</h2>
      </div>
      <div className={styles.product__location}>
        {data.address}
      </div>
    </div>
  )
};

const Divider = () => <div className={styles.divider}></div>;

const ProductList = ({ items }) => {
  return (
    <ol className={styles.productList}>
      {items.map((item, idx) => (
        <Link href={`items/${item.id}`} key={item.id} >
          <li className={styles.productList__item}>
            <ProductItem data={item} />
            {idx != items.length - 1 && <Divider />}
          </li>
        </Link>
      ))}
    </ol>
  )
};

export default ProductList;