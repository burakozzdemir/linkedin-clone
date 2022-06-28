import React from "react";
import HeaderOption from "../HeaderOption/HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../store/userSlice";
import { auth } from "../../utils/firebase";

const Logout = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser);

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
