import React from 'react';

import styles from '../styles/EmptyState.module.scss';

const EmptyState = ({ title = '', children }) => (
  <div className={styles.emptyState}>
    <h1 className={styles.emptyState__title}>{title}</h1>
    <div className={styles.emptyState__subtitle}>{children}</div>
  </div>
)

export default EmptyState;