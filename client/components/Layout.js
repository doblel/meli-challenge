import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/Head'

import NavBar from './NavBar'
import BreadCrumb from './BreadCrumb'

import styles from '../styles/App.module.scss'
import useAppContext from '../context'

const Layout = ({ Component, pageProps }) => {

  const router = useRouter()
  const { categories, setCategories } = useAppContext()


  const handleSearch = term => {
    router.push(`/items?search=${term}`)
  }

  const navigateHome = () => {
    setCategories([])
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Mercado Libre</title>
      </Head>
      <div className={styles.appContainer}>
        <NavBar onSearch={handleSearch} goHome={navigateHome} />
        <main className={styles.main}>
          {!!categories.length && <BreadCrumb items={categories} />}
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default Layout