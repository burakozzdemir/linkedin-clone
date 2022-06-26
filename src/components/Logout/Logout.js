import React from "react";
import HeaderOption from "../HeaderOption/HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/reducers/userSlice";
import { auth } from "../../utils/firebase";
 import { NavLink } from "react-router-dom";
// import  { useState, useEffect } from 'react'

const Logout = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  // const [logOut, setlogOut] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setlogOut(!logOut);
  //   }, 3000);
  // }, []);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div>
      <>
        {/* {logOut && ( */}
        <NavLink to="/login">
        <HeaderOption avatar={true} onClick={logoutOfApp} />
        </NavLink>
        {/* )} */}
      </>
    </div>
  );
};

export default Logout;
