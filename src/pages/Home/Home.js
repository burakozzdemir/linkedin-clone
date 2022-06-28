import React from "react";
import Header from "../../components/Header/Header";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";

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
