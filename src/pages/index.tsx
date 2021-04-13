import Head from 'next/head'
import React from 'react'
import Link from "next/link";

import Quotes from '../components/Quotes'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


export default function Home(): JSX.Element {
  
  
  return (
    <div>
      <Head>
        <title> SecureApp | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <div className="layout">
          <div className="home">
            <div>
              <Quotes />
              <div className="content">
                <div className="block">
                  <div className="block-text">
                    <h4>Learn all about Pretexting</h4>
                    <p> A beginner friendly insight on the Pretexting attack flow, highlighting behaviours exploited by a social engineer. </p>
                    <Link href='/pretexting'>
                      <a className="btn">
                        Understanding Pretexting
                      </a>
                    </Link>
                  </div>
                  <img src={'privacy.png'} alt="pretexting-graphic" className="" />
                </div>
                <div className="block">
                  <img src={'header.png'} alt="pretexting-graphic" className="" />
                  <div className="block-text">
                    <h4>Take a Phishing Assessment</h4>
                    <p>Even the best of us can fall prey to sophisticated phishing scams. With this quiz you can remain one stepahaead.</p>
                    <a href='https://phishingquiz.withgoogle.com/' target="blank" rel="noreferrer" className="btn">Take Phishing Assessment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
