import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - BoilerPlate</title>
        <link rel="shortcut icon" href="/img/icon-512.png"></link>
        <link rel="apple-touch-icon" href="/img/icon-512.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project made with React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
