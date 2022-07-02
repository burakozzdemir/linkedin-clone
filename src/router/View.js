import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const View = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default View;
