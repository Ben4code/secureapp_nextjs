import React from 'react'
import Link from "next/link";


export default function Header() {

  return (
    <div className='header'>
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h2>Get the latest security safety tips and news on the web.</h2>
            <p>Share your personal cyber threat experiences...</p>
            <Link href='/experience-bank'>
              <a className="btn-danger">
                Experience bank
              </a>
            </Link>
          </div>
          <div className="header-img">
            <img src={`/security.svg`} alt="header art" />
          </div>
        </div>
      </div>
    </div>
  )
}
