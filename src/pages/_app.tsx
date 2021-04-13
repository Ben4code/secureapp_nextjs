import React from 'react'
import { AppProps } from 'next/app'

import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContextProvider from '../Context/AuthContext';
import { FirebaseAuthContextProvider } from '../firebase/auth'
import "../../public/scss/main.scss";


function App({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <Head>
        <title>SecureApp</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
        <FirebaseAuthContextProvider>
          <AuthContextProvider>
            <Navbar />
      <div className="App">
            <Component {...pageProps} />
      </div>
            <Footer />
          </AuthContextProvider>
        </FirebaseAuthContextProvider>
    </>
  )
}

export default App