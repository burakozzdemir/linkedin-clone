import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar /> 
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
};

export default App;
