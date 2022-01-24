import React, { useState } from "react";
import "./Post.css";

function Post({ image, username, timestamp, message }) {
  const [like, setLike] = useState(100);
  const [dislike, setdisLike] = useState(100);
  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  function Like() {
    if (likeactive) {
      setlikeactive(false);
      setLike(like - 1);
    } else {
      setlikeactive(true);
      setLike(like + 1);
    }
    if (dislikeactive) {
      setdislikeactive(false);
      setLike(like + 1);
      setLike(dislike - 1);
    }
  }

  return (
    <div className="post">
      <div className="post__topInfo">
        <h3>{username}</h3>
        <p>Timestamp</p>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        {/* take the image which will come as a prope */}
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <button onClick={Like}>Like {Like}</button>
        </div>

        <div className="post__option">
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
