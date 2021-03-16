import Document, { Html, Head, Main, NextScript } from 'next/document';

class SEOFriendlyDocument extends Document {
  render() {
    <Html>
      <Head>
        <meta name="description" content="Mercado Libre clone " />
        <meta property="og:title" content="MELI Challenge" />
        <meta property="og:site_name" content="MELI Challenge" />
        <meta property="og:description" content="Mercado Libre clone" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}

export default SEOFriendlyDocument