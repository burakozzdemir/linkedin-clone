import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/userSlice";

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {!user ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </>
  );
};

export default Home;
