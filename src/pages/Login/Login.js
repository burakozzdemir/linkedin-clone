/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import SignInGoogle from "../../components/SignInGoogle/SignInGoogle";


const Login = () => {
  return (
    <>
      <div className="login">
        <a href="http://localhost:3001/login">
        <img src="./Logo.png" alt="" />
        </a>
        <div>
          <h2 className="header-signIn">Sign In</h2>
          <h4 className="header-h4">
            Get the latest news about your professional <br /> world.
          </h4>
        </div>
        <form>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <a className="form-link">Forgot your password?</a>

          {/* <Link to="/home">   type= "submit yerine button oldu." */}
          <button className="btn-login" type="submit">
            Sign In
          </button>
          {/* </Link> */}

          <p className="section-2">
            or
            <hr />
          </p>
        </form>

        <div className="google-login-one">
          <SignInGoogle />
        </div>

        <p className="member-p">
          New to LinkedIn? {""}
          <NavLink
            to="/login"
            style={() => ({ color: "white", textDecoration: "none" })}
          >
            <span className="login-now">Register Now</span>{" "}
          </NavLink>
        </p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}

        <footer className="footer-login">
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
