import React from 'react'

import { useRouter } from "next/router";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const router = useRouter();
  const { children } = props;
  const auth = firebase.auth()

  return (
    <div>
      {
        !auth.currentUser ? router.push('/login') : ({children})
      }
    </div>
  )
}

export default AuthRoute