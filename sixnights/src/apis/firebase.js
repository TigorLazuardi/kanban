import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID
});

const db = firebase.firestore();


export default db