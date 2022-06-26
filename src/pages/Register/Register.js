/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/userSlice";
import { NavLink } from "react-router-dom";
import SignInGoogle from "../../components/SignInGoogle/SignInGoogle";
import "./Register.css";

const Register = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [name, SetName] = useState("");
  const [profilePic, SetprofilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
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
            console.log('test');
            // <Navigate to={"/home"} replace={true} />;
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="register">
      <a href="http://localhost:3001/register">
        <img src="./Logo.png" alt="" />
      </a>
      <h2>Get the most out of your professional life</h2>
      <div className="register-form">
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

          <div>
            <p className="register-text">
              By clicking Accept and Join,you agree to LinkedIn's <br />
              <a
                href="https://tr.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
                target="_blank"
                rel="noreferrer"
              >
                User Agreement,
              </a>
              <a
                href="https://tr.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Privacy Policy{" "}
              </a>{" "}
              and {""}
              <a
                href="https://tr.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Policy.
              </a>
            </p>
          </div>
          <button
            className="register-button"
            type="button"
            onClick={register}
          >
            Accept or Join
          </button>
          <span className="register-span">or</span>
          <hr className="register-span-hr" />
        </form>
        <div className="register-google">
          <SignInGoogle />
        </div>
        <div>
          <p className="register-member">
            Already member of LinkedIn?{" "}
            <NavLink
              to="/login"
              style={() => ({ color: "white", textDecoration: "none" })}
            >
              <span className="register-now" onClick={loginToApp}>
                Register Now
              </span>
            </NavLink>
          </p>
        </div>
        <p className="register-create">
          Want to create a page for a business?{" "}
          <a
            href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link"
            target="_blank"
            rel="noreferrer"
          >
            Get Help
          </a>
        </p>
      </div>
      <footer className="register-footer">
        <img src="./Logo.png" alt="" />
        <a href=""> © 2022</a>
        <a href="">About Us</a>
        <a href="">Accessibility</a>
        <a href="">User Agreement</a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Copyright Policy</a>
        <a href="">Brand Policy</a>
        <a href="">Visitor Controls</a>
        <a href="">Community Guidelines</a>
        <a href="">Language</a>
      </footer>
    </div>
  );
};

export default Register;
