import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDHPk-MwsqvnQ2pdHfNKEGADfGvC9Aerpk",
    authDomain: "cheshire-chat-3c10b.firebaseapp.com",
    projectId: "cheshire-chat-3c10b",
    storageBucket: "cheshire-chat-3c10b.appspot.com",
    messagingSenderId: "123503248426",
    appId: "1:123503248426:web:5c89f7bd3c39df535d2f53"
  }).auth();