/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import SignInGoogle from "../../components/SignInGoogle/SignInGoogle";
import { auth } from "../../utils/firebase";
import { login } from "../../store/reducers/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        userAuth.user.updateProfile({}).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
          // <Navigate to={"/home"} replace={true} />;
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div className="login">
        <a href="http://localhost:3001/login">
          <img src="./Logo.png" alt="" />
        </a>
        <h2>Sign In</h2>
        <h4>
          Get the latest news about your professional <br /> world.
        </h4>
        <form>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <a>Forgot your password?</a>

          {/*   type= "submit yerine button oldu."  */}
          <button className="login-button" type="button" onClick={loginToApp}>
            Sign In
          </button>
          <p className="login-text">
            or
            <hr />
          </p>
        </form>

        <div className="login-google">
          <SignInGoogle />
        </div>
        <p className="login-new">
          New to LinkedIn? {""}
          <NavLink
            to="/register"
            style={() => ({ color: "white", textDecoration: "none" })}
          >
            <span className="login-now" onClick={register}>
              Register Now
            </span>
          </NavLink>
        </p>
        <footer className="login-footer">
          <img src="./Logo.png" alt="" />
          <a href=""> © 2022</a>
          <a href="">User Agreement</a>
          <a href="">Privacy Policy</a>
          <a href="">Community Guidelines</a>
          <a href="">Cookie Policy</a>
          <a href="">Copyright Policy</a>
          <a href="">Send Feedback</a>
          <a href="">Language</a>
        </footer>
      </div>
    </>
  );
};

export default Login;
