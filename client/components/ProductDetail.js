import React from 'react';
import Image from 'next/image';

import styles from '../styles/ProductDetail.module.scss';

const ProductDetail = ({ item }) => {

  return (
    <div className={styles.product}>
      <div className={styles.product__leftContent}>
        <Image src={item.image} width="680" height="600" objectFit="contain" className={styles.product__image} />
        <div className={styles.product__description}>
          <h2 className={styles.product__description__title}>Descripción</h2>
          <p className={styles.product__description__content}>{item.description}</p>
        </div>
      </div>
      <div className={styles.product__rightContent}>
        <span className={styles.product__condition}>
          Nuevo - {item.soldQuantity} vendidos
        </span>
        <h1 className={styles.product__title}>
          {item.title}
        </h1>
        <span className={styles.product__price}>
          {item.price}
        </span>
        <button role="button" className={styles.product__buyButton} type="submit">
          Comprar
        </button>
      </div>
    </div>
  )
};

export default ProductDetail;