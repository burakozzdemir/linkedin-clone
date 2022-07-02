import React from "react";
import { NavLink } from "react-router-dom";
import { firebase } from "../utils/firebase";
import logo from "../assets/images/google-logo.png"

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
          <img src={logo} alt="" /> Continue with
          Google
        </button>
      </NavLink>
    </div>
  );
};

export default SignInGoogle;
