import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGIIROrtN940VXZioB8OZMfCQ2i1o1vEA",
    authDomain: "clone-2f5f7.firebaseapp.com",
    databaseURL: "https://clone-2f5f7.firebaseio.com",
    projectId: "clone-2f5f7",
    storageBucket: "clone-2f5f7.appspot.com",
    messagingSenderId: "92199965104",
    appId: "1:92199965104:web:5b4361f6feec4860ec4675",
    measurementId: "G-5GL8TWC809"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};


