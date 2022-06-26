import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/userSlice";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="./bg.png" alt="" />
        <Avatar
          src={user?.photoUrl}
          style={{ width: "70px", height: "70px" }}
          className="sidebar-avatar"
        >
          {user?.email[0]}{" "}
        </Avatar>
        <h2>{user?.displayName}</h2>
        {/* <h4>{user?.email} </h4> */}
        <h4>Front End Developer</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p style={{ color: "grey" }}>Connections</p>
          <p className="sidebar-statNumber">450</p>
        </div>
        <div className="sidebar-stat">
          <p className="sidebar-two-p">Grow your network</p>
          <p className="sidebar-statNumber"></p>
        </div>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p style={{ color: "grey" }}>Access Exclusive Tools insights</p>
        </div>
        <div className="sidebar-stat">
          <a
            href="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&upsellOrderOrigin=premium_nav_upsell_text"
            target="_blank" rel="noreferrer"
          >
            Try premimum for free
          </a>
          <p className="sidebar-statNumber"></p>
        </div>
      </div>

      <div className="sidebar-stats-one">
        <div className="sidebar-stat-one">
          <p className="sidebar-one-p">My items</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        {recentItem("Groups")}
        {recentItem("Event")}
        {recentItem("Followed Hashtag")}
      </div>
      <div className="sidebar-stats-one">
        <div className="sidebar-stat-one">
          <p className="sidebar-p">Discover More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
