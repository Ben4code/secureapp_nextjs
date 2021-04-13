import React, {useState, useEffect, createContext, useContext} from 'react'
import nookies from 'nookies';
import firebase from 'firebase/app'
import firebaseClient from './firebaseClient'
import 'firebase/auth'



const FirebaseAuthContext = createContext(null)
// export const auth = firebase.auth()

export const FirebaseAuthContextProvider = ({children}) => {
  firebaseClient();
  const [user, setUser] = useState(null)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged( async (user) => {
      if(!user){
        setUser(null)
        nookies.set(undefined, "token", "", {})
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, "token", token, {})
    })
    
  }, [])
  
  return(
    <FirebaseAuthContext.Provider value={{user}}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export const useAuth = () => useContext(FirebaseAuthContext)
