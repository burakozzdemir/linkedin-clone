/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";
import SignInGoogle from "../../components/SignInGoogle/SignInGoogle";

const Register = () => {
  return (
    <>
      <div className="login">
        <img src="./Logo.png" alt="" />
        <div>
          <h2 className="header">Get the most out of your professional life</h2>
        </div>
        <form>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <div>
            <p className="section">
              By clicking Accept and Join, you agree to{" "}
              <a
                className="link"
                href="https://tr.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin's User <br />
                Agreement,
              </a>
              <a
                className="link1"
                href="https://tr.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Privacy Policy,{" "}
              </a>{" "}
              and{" "}
              <a
                className="link2"
                href="https://tr.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy"
                target="_blank"
                rel="noreferrer"
              >
                Cookie Policy.
              </a>
            </p>
          </div>
          <button className="btn" type="submit">
            <NavLink
              style={() => ({ color: "white", textDecoration: "none" })}
              to="/home"
            >
              Accept or Join
            </NavLink>
          </button>
          <p className="section2">
            or
            <hr />
          </p>
        </form>
        <div className="google-login">
          <SignInGoogle />
        </div>
        <p>
          Already a member of Linkedin? {""}
          <NavLink
            to="/login"
            style={() => ({ color: "white", textDecoration: "none" })}
          >
            <span className="login-register">Register Now</span>{" "}
          </NavLink>
        </p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <p>
          Want to create a page for a business?{" "}
          <a
            className="link3"
            href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link"
            target="_blank"
            rel="noreferrer"
          >
            Get Help
          </a>{" "}
        </p>
        <footer className="footer">
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
    </>
  );
};

export default Register;
