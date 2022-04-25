"use strict"

function Tweet({ username, author, date, msg}){
  const tweetStyle = {
    color: "purple",
    fontSize: "35px",
    backgroundColor: "tan"
  }

  return (
    <div style={tweetStyle}>
      <div>Username: {username}</div>
      <div>Author: {author}</div>
      <div>Date: {date}</div>
      <div>Message: {msg}</div>
    </div>
  );
}