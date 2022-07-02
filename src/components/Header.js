import React from "react";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink to="/login">
          <img
            className="header-left-img"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png "
            alt=""
          />
        </NavLink>
        <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <Logout />
        <hr className="header-hr" />
        <HeaderOption Icon={ViewComfyIcon} title="Work" />
        <a
          href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&upsellOrderOrigin=premium_nav_upsell_text"
          target="_blank"
          rel="noreferrer"
        >
          Try Premium for <br />
          <a
            href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&upsellOrderOrigin=premium_nav_upsell_text"
            target="_blank"
            rel="noreferrer"
            className="header-link"
          >
            free
          </a>
        </a>
      </div>
    </div>
  );
};

export default Header;
