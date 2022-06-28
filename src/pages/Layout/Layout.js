/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SchoolIcon from "@material-ui/icons/School";
import ExploreIcon from "@material-ui/icons/Explore";
import HeaderOption from "../../components/HeaderOption/HeaderOption";
import "./Layout.css";
import { login, selectUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";

const Layout = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="layout">
        <div className="layout-left">
          <a href="http://localhost:3000">
            <img src="./linkedin-logo.png" alt="" />
          </a>
        </div>
        <div className="layout-right">
          <HeaderOption Icon={ExploreIcon} title="Explore" />
          <HeaderOption Icon={SupervisorAccountIcon} title="People" />
          <HeaderOption Icon={SchoolIcon} title="Learning" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <hr />
          <Link to="/register">
            <button className="button-one">Join now</button>
          </Link>

          <Link to="/login">
            <button className="button-two">Sign In</button>
          </Link>
        </div>
      </div>

      <div class="layout-row">
        <div>
          <div className="layout-content">
            <h1>
              Welcome to your <br /> proffessional <br /> community!
            </h1>
          </div>
        </div>
        <div className="layout-img">
          <img
            src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt=""
          />
        </div>
      </div>

      <div>
        <form className="layout-form">
          <input
            type="email"
            placeholder="E-mail or phone number"
            onChange={(e) => SetEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => SetPassword(e.target.value)}
          ></input>
          <a>Forgot your password?</a>

          <NavLink to="/home">
            <button className="layout-button" onClick={loginToApp}>
              Sign In
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Layout;
