import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpqCCP3Dy160aXkMbNFLJBNLf_IJv3zo0",
  authDomain: "linkedin-clone-16793.firebaseapp.com",
  projectId: "linkedin-clone-16793",
  storageBucket: "linkedin-clone-16793.appspot.com",
  messagingSenderId: "311771204088",
  appId: "1:311771204088:web:525bc12c800281d2962e0d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, firebase };
