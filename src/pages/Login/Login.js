import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/userSlice";


const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, SetName] = useState("");
  const [profilePic, SetprofilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
        }))
    }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
    }).catch(error => alert(error));
  };

  return (
    <div className="login">
      <img src="./Linkedin.png" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => SetprofilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
