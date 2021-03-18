import '../styles/_globals.scss'
import { AppContextProvider } from "../context"
import Layout from '../components/Layout'


const App = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </AppContextProvider>
  )
}

export default App
