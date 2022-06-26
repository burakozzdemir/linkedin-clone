import React from "react";
import "./assets/css/App.css";
import View from "./router/View";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/reducers/userSlice";
import { auth } from "./utils/firebase";
import { useEffect } from "react";

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
      <View />
    </>
  );
};

export default App;

// {
  /* <div className="app">
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
</div>; */
// }
