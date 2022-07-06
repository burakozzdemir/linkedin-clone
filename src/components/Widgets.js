import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>
      {newsArticle("Burak Özdemir is here", "Top news - 10500 readers")}
      {newsArticle("Coronavirus: Turkey updates", "Top news - 525 readers")}
      {newsArticle("Tesla hits new higs", "Cars & auto  - 647 readers")}
      {newsArticle("Bitcoin Breaks $20k", "Crypto- 7650 readers")}
      {newsArticle("Is Redux too reusable?!", "Top news - 4542 readers")}
    </div>
  );
};

export default Widgets;
