import { useRouter } from 'next/router'

import '../styles/_globals.scss';
import styles from '../styles/App.module.scss';
import NavBar from '../components/NavBar';
import Head from 'next/Head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleSearch = term => {
    router.push(`/items?search=${term}`);
  }

  return (
    <>
     <Head>
       <title>Mercado Libre</title>
     </Head>
      <div className={styles.appContainer}>
        <NavBar onSearch={handleSearch} goHome={() => router.push('/')} />
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
