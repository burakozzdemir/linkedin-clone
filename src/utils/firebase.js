import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBpqCCP3Dy160aXkMbNFLJBNLf_IJv3zo0",
//   authDomain: "linkedin-clone-16793.firebaseapp.com",
//   projectId: "linkedin-clone-16793",
//   storageBucket: "linkedin-clone-16793.appspot.com",
//   messagingSenderId: "311771204088",
//   appId: "1:311771204088:web:525bc12c800281d2962e0d",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBsZIU8218ObLohP93Ii5PLamFUI1Iat3I",
  authDomain: "linkedin-clone-129a6.firebaseapp.com",
  projectId: "linkedin-clone-129a6",
  storageBucket: "linkedin-clone-129a6.appspot.com",
  messagingSenderId: "957593861169",
  appId: "1:957593861169:web:aee76c901a510f14252910"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth, firebase };
