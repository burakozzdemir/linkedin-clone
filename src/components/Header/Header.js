import React from "react";
import "./Header.css";
import HeaderOption from "../HeaderOption/HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { logout, selectUser } from "../../store/reducers/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt=""
        />

        <div className="header-search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header-right">
        <Link to="/">
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        {/* <Link to="/login">Login</Link> */}
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chats" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar={true} onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
