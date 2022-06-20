import React from "react";
import { firebase } from "../../utils/firebase";
import "./SignInGoogle.css";

const SignInGoogle = () => {
  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button className="button" onClick={SignInWithFirebase}>
        {" "}
        <img src="./Google.png" alt="" /> Continue with Google
      </button>
    </div>
  );
};

export default SignInGoogle;
