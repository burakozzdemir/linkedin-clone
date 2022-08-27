import React from "react";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { auth } from "../utils/firebase";

const Logout = () => {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div>
      <>
        <HeaderOption avatar={true} onClick={logoutOfApp} />
      </>
    </div>
  );
};

export default Logout;
