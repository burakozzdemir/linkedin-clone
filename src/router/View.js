import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login/Login";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";
import Header from "../components/Header/Header";

const View = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null)
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {!user ? (
        <Route path="login" element={<Login />} />
      ) : (
        <>
          <Route path="/home" element={<Header />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/home" element={<Feed />} />
          <Route path="/home" element={<Widgets />} />
        </>
      )}
    </Routes>
  );
};


export default View;
