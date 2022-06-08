import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnb2qEpgri-DjYurzJ1uadwTDplI_KOUU",
    authDomain: "react-apps-c21e1.firebaseapp.com",
    projectId: "react-apps-c21e1",
    storageBucket: "react-apps-c21e1.appspot.com",
    messagingSenderId: "850226944494",
    appId: "1:850226944494:web:c9186286c18a859e68d6ff"
  };

//It's a DB
firebase.initializeApp(firebaseConfig); 

//It's a reference to firestore
const db = firebase.firestore();

//auth provider for authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}