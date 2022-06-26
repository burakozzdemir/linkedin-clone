import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";

const View = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default View;
