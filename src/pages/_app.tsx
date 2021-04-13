import React from 'react'
import { AppProps } from 'next/app'

import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContextProvider from '../Context/AuthContext';
import { FirebaseAuthContextProvider } from '../firebase/auth'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import firebaseClient from '../firebase/firebaseClient';
import "../../public/scss/main.scss";


function App({ Component, pageProps }: AppProps) {
  // firebaseClient()
  // const auth = firebase.auth()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //     }
  //   })
  //   setLoading(false)
  // }, [])

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }


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