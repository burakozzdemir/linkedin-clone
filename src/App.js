import React, { useEffect } from "react";
import "./assets/css/App.css";
import View from "./router/View";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/reducers/userSlice";
import { auth } from "./utils/firebase";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Register from "./pages/Register/Register";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";

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

  return (
    <>
      <View>
        {!user ? (
          <>
            <Layout />
            <Register />
            <Login />
          </>
        ) : (
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        )}
      </View>
    </>
  );
};

export default App;
