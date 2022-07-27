import React, { useEffect, useState } from "react";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { db } from "../utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { Avatar } from "@material-ui/core";


const Feed = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <Avatar src={user?.photoUrl} className="feed-avatar">
            {user?.email[0]}{" "}
          </Avatar>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color=" #70B5F9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color=" #E7A33E"
          />
          <InputOption Icon={EventNoteIcon} title="Event" color=" #C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color=" #7FC15E"
          />
        </div>
      </div>
      <div>
        <hr className="feed-hr" />
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          if (!!name) {
            return (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            );
          } else {
            return null;
          }
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
