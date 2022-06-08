import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ Icon, title }) => {
  return <div className="headerOption">{Icon && <Icon className= 'headerOption-icon' />}
  <h3 className="headerOption-title" > {title} </h3>
  </div>;
};

export default HeaderOption;
