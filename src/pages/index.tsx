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
                    <p>We have prepared a beginner friendly introdution to Pretexting highlighting its dangers and opportunities when implemented correctly. </p>
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

                {/* <div className="content__buttons">
                  <Link to='/experience-bank' className="btn">Experience bank</Link>
                </div>
                <a href='https://phishingquiz.withgoogle.com/' target="blank" rel="noreferrer" className="btn">Take Phishing Assessment</a> */}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
