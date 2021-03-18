import React from 'react'
import Link from 'next/Link'
import Head from 'next/Head'

import EmptyState from '../components/EmptyState'

const NotFound = () => {
  const linkStyles = {
    textDecoration: 'underline',
    marginLeft: 3,
    color: 'blue',
    cursor: 'pointer'
  }

  return (
    <>
      <Head>
        <title>404 Not Found | Mercado Libre</title>
      </Head>
      <EmptyState title="Ups.. Parece que ha ocurrido un error">
        <span>
          El producto que busca no se encuentra,
          <Link href="/">
            <span style={linkStyles}>volver al inicio</span>
          </Link>
        </span>
      </EmptyState>
    </>
  )
}

export default NotFound