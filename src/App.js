import React from "react";
import "./assets/css/App.css";
import Feed from "./components/Feed/Feed.js";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/reducers/userSlice";
import Login from "./pages/Login/Login.js";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import Widgets from "./components/Widgets/Widgets";


const App = () => {
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
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
};

export default App;
