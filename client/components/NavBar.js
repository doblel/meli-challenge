import React, { useState } from 'react';
import Image from 'next/image'

import styles from '../styles/NavBar.module.scss';

const NavBar = ({ onSearch, goHome }) => {
  const [term, setTerm] = useState('');

  const inputChange = event => {
    setTerm(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (!term)
      return;

    onSearch(term);
  };

  const goToHome = () => {
    setTerm('');
    goHome();
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <Image className={styles.logo} src="/Logo_ML@2x.png.png" alt="Logo Mercado Libre" width="55" height="40" onClick={goToHome} />
        <form className={styles.searchForm} onSubmit={submitHandler}>
          <input value={term} onChange={inputChange} placeholder="Nunca dejes de buscar" className={styles.searchForm__input} />
          <button className={styles.searchForm__submit} alt="Search" type="submit" role="button">
            <Image src="/ic_Search.png" alt="Search" width="18" height="18" />
          </button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;