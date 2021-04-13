import firebase from 'firebase/app'

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
};

export default function firebaseClient() {
  if(!firebase.apps.length ) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
