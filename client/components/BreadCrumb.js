import React from 'react';

import styles from '../styles/BreadCrumb.module.scss';

const Divider = () => (<div className={styles.breadCrumb__divider}>{'>'}</div>);

const BreadCrumb = ({ items = [] }) => {

  return (
    <ol className={styles.breadCrumb}>
      {items.map((item, idx) => (
        <li className={styles.breadCrumb__item} key={`${idx}-${item}`}>
          {item}
          {idx !== items.length - 1 && <Divider />}
        </li>
      ))}
    </ol>
  )
}

export default BreadCrumb;