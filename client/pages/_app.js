import '../styles/_globals.scss';
import { AppContextProvider } from "../context";
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
