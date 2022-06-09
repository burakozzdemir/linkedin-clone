import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import InputOption from "./InputOption";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/CachedOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src="./avatar.png" />
        <div className="post-info">
          <h2>{name}</h2>
          <p> {description} </p>
        </div>
      </div>
      <div className="post-body">
        <p>{message} </p>
      </div>
      <div className="post-buttons">
        <InputOption
          Icon={ThumbDownAltOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />{" "}
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />{" "}
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
