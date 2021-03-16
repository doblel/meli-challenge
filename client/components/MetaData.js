import React from 'react';
import Head from 'next/Head';

const MetaData = ({ searchParam = '', item = {} }) => {
  const term = item && item.title || searchParam;
  const title = `${term} | Mercado Libre`;
  const description = `Compra y vende ${term} en Mercado Libre`;
  const keywords = `${term}, Compra ${term}, Vende ${term}, Compra/Venta`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  )
}

export default MetaData;