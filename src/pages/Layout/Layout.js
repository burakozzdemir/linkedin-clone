import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
          <img src="./Logo.png" alt="" />
        </div>
        <Navigate to="/layout" replace={true} />

        <div className="layout-right">
          <HeaderOption Icon={ExploreIcon} title="Explore" />
          <HeaderOption Icon={SupervisorAccountIcon} title="People" />
          <HeaderOption Icon={SchoolIcon} title="Learning" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <hr />
          <button className="join">Join now</button>
          <Link to="/login">
            <button className="sign-in">Sign In</button>
          </Link>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="content">
            <h1>
              Welcome to your <br /> proffessional <br /> community!
            </h1>
          </div>
        </div>
      <div className="container">
      <form className="form">
        <input
          type="text"
          placeholder="E-mail or phone number"
        ></input>
        <input type="text"
        placeholder="Password"
        ></input>
        <span className="login-register">
        Forgot your password?
        </span>
         <button>Sign In</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default Layout;
