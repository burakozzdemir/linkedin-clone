import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsZIU8218ObLohP93Ii5PLamFUI1Iat3I",
  authDomain: "linkedin-clone-129a6.firebaseapp.com",
  databaseURL: "https://linkedin-clone-129a6-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-129a6",
  storageBucket: "linkedin-clone-129a6.appspot.com",
  messagingSenderId: "957593861169",
  appId: "1:957593861169:web:aee76c901a510f14252910"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth, firebase };
