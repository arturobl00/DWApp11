import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDi0UJoOESzBGLaS0xPGuBKn2x9m3j_Xvk",
    authDomain: "michatreact.firebaseapp.com",
    projectId: "michatreact",
    storageBucket: "michatreact.appspot.com",
    messagingSenderId: "981898845282",
    appId: "1:981898845282:web:c8ec13524747ef6162053b"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}