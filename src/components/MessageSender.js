import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
  //keeping track of the input
  const [input, setInput] = useState("");
  const [imageURL, setImageUrl] = useState("");

  const hanleSubmit = (e) => {
    e.preventDefault();

    //database
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <form>
          {/* Need to map the input to our state */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={"What is happening"}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"For pictures, URL"}
          />
          <button onClick={hanleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
