import React from 'react'

import { useRouter } from "next/router";
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseClient from '../firebase/firebaseClient';


export function SignInWithGoogle() {
  const router = useRouter();
  firebaseClient()
  const auth = firebase.auth()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup( googleAuthProvider )
      if(result.user){
        router.push('/experience-bank')
        return
      }
      alert('Something went wrong, try again.')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <button className="btn btn-google" onClick={signInWithGoogle}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{marginRight: '1rem'}}>
          Sign In with Google 
        </span>  
        <img width="30" height="30" src={`/google.png`} alt="Google logo"/>
      </div>
    </button>
  )
}

