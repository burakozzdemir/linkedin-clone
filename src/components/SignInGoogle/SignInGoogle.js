import React from "react";
import "./SignInGoogle.css";
import { NavLink } from "react-router-dom";
import { firebase } from "../../utils/firebase";

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
      <NavLink to="/home">
        <button className="sign-in-google" onClick={SignInWithFirebase}>
          <img src="./Google.png" alt="" /> Continue with Google
        </button>
      </NavLink>
    </div>
  );
};

export default SignInGoogle;
