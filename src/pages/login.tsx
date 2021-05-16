import React, {FormEvent, useState, useContext} from 'react'

import Link from "next/link";
import { useRouter } from "next/router";
import { SignInWithGoogle } from '../components/SignInWithGoogle'
import { AuthContext } from '../Context/AuthContext'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function Login() {
  const auth = firebase.auth()
  const [authenticating, setAuthenticating] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const [error, setError] = useState<string>('')

  const router = useRouter();

  const {dispatch} = useContext(AuthContext)

  const signInWithEmailAndPassword = (event: FormEvent) => {
    event.preventDefault()
    if(error !== ''){
      setError('')
    }
    setAuthenticating(true)
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      dispatch({
        type: 'FETCH_AUTH_USER',
        payload: true
      })

      router.push('/')
    }).catch(error => {
      console.log(error)
      setError('Unable to sign in, please try again.')
      setAuthenticating(false)
    })

  }
  
  return (
    <div className="signup">
      <form className="form" onSubmit={signInWithEmailAndPassword}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" name="email" onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" name="password" onChange={event => setPassword(event.target.value)}/>
        </div>
        <button className="btn" disabled={authenticating}>Login</button>
        <SignInWithGoogle />
      </form>
      <small>
        <p>Don't have an account? 
          <Link href='/signup'>
            <a>
              Register here
            </a>
          </Link>
        </p>
      </small>
      { error && (
        <small>
          <p>{error}</p>
        </small>
      )}
    </div>
  )
}
