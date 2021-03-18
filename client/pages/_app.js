import '../styles/_globals.scss'
import { AppContextProvider } from "../context"
import Layout from '../components/Layout'

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "#3483fa",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const App = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </AppContextProvider>
  )
}

export default App
