import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDablwnxlxC1GeOuSmcPLDOVb5w_atG0DA",
    authDomain: "clone-9f3d0.firebaseapp.com",
    projectId: "clone-9f3d0",
    storageBucket: "clone-9f3d0.appspot.com",
    messagingSenderId: "873948234209",
    appId: "1:873948234209:web:280918dc721d03941292a0"
  };

 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

  const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, db };
