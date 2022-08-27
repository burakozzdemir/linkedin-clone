import React from "react";
import Header from "../components/Header";
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"

const Home = () => {
  return (
    <>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Home;
