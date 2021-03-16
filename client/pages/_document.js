import Document, { Html, Head, Main, NextScript } from 'next/document';

class SEOFriendlyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Mercado Libre " />
          <meta property="og:title" content="Mercado Libre" />
          <meta property="og:site_name" content="Mercado Libre" />
          <meta property="og:description" content="Mercado Libre" />
          <link rel="icon" type="image/png" href="/Logo_ML.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SEOFriendlyDocument