import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDablwnxlxC1GeOuSmcPLDOVb5w_atG0DA",
    authDomain: "clone-9f3d0.firebaseapp.com",
    projectId: "clone-9f3d0",
    storageBucket: "clone-9f3d0.appspot.com",
    messagingSenderId: "873948234209",
    appId: "1:873948234209:web:280918dc721d03941292a0"
  };

  const firebase = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};