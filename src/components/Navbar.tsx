import React, { useContext } from 'react'
import NavLink from "next/link";
import { useRouter } from "next/router";
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseClient from '../firebase/firebaseClient';
import { AuthContext } from '../Context/AuthContext'

export default function Navbar() {
  firebaseClient()
  const auth = firebase.auth()
  const router = useRouter();
  const { state, dispatch } = useContext(AuthContext)

  const logout = async () => {
    await auth.signOut()
      .then(result => {
        router.push('/login')
        dispatch({
          type: 'FETCH_AUTH_USER',
          payload: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="navbar">
      <ul className="navbar nav-list">
        <li className="navbar nav-item logo">
          <NavLink href="/">
            <a className="nav-link">
              SecureApp
            </a>
          </NavLink></li>
        <div className="nav-group">
          <li className="navbar nav-item">
            <NavLink href="/">
              <a className="nav-link">
                Home
              </a>
            </NavLink>
          </li>
          <li className="navbar nav-item">
            <NavLink href="/about">
              <a className="nav-link">
                About
              </a>
            </NavLink>
          </li>
          <li className="navbar nav-item">
            <NavLink href="/pretexting">
              <a className="nav-link">
                Pretexting
              </a>
            </NavLink>
          </li>

          {
            auth.currentUser ?
              (
                <>
                  <li className="navbar nav-item">
                    <NavLink href="/experience-bank">
                      <a className="nav-link bordered">
                        Experience bank
                      </a>
                    </NavLink>
                  </li>
                  <li className="navbar nav-item">
                    <a style={{cursor: 'pointer'}} onClick={logout} className="nav-link">
                      Logout
                    </a>
                  </li>
                </>
              ) :
              (
                <>
                  <li className="navbar nav-item">
                    <NavLink href="/login">
                      <a className="nav-link">
                        Login
                      </a>
                    </NavLink>
                  </li>
                  <li className="navbar nav-item">
                    <NavLink href="/signup">
                      <a className="nav-link">
                        Signup
                      </a>
                    </NavLink>
                  </li>
                </>
              )
          }
        </div>
      </ul>
    </div>
  )
}
