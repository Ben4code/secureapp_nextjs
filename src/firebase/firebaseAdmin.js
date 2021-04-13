const admin = require('firebase-admin')
const serviceAccount = require('./secrets.json')

export const verifyIdToken = (token) => {
  if(!admin.apps.length){
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.databaseUrl,
    })
  }
}

return admin.auth().verifyIdToken(token).catch((error) => {
  console.log(error)
  throw error
})