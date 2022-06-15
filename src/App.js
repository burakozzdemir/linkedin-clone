import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/reducers/userSlice";
import Login from "./pages/Login/Login.js";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

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
  }, []);

  return (
    // <div className="app">
    //   <Header />
    //   {!user ? (
    //     <Login />
    //   ) : (
    //     <div className="app-body">
    //       <Sidebar />
    //       <Feed />
    //       <Widgets />
    //     </div>
    //   )}
    // </div>

    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
