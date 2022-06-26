/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SchoolIcon from "@material-ui/icons/School";
import ExploreIcon from "@material-ui/icons/Explore";
import HeaderOption from "../../components/HeaderOption/HeaderOption";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout-left">
          <a href="http://localhost:3001/layout">
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
          <input type="text" placeholder="E-mail or phone number"></input>
          <input type="text" placeholder="Password"></input>
          <a>Forgot your password?</a>

          <NavLink to="/login">
            <button className="layout-button">Sign In</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Layout;
