import React from "react";
import Header from "../../components/Header/Header";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/userSlice";

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {user ? (
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      ) : (
        <>
          <Layout />
        </>
      )}
    </>
  );
};

export default Home;
