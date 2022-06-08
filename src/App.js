import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar /> 
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
};

export default App;
