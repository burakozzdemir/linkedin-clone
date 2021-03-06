import React, { useEffect } from "react";
import "./App.css";
import View from "./router/View";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";
import { auth } from "./utils/firebase";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        //user is logged out
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{!user ? <View /> : <Home />}</>;
};

export default App;
