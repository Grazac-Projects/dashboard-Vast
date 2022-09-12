import React from "react";
import'./eachoverview.css'
const eachoverview = ({props, text}) => {
  return (
    <div className="overview">
      <h2 className="title">{props}</h2>
      <p className="over">{text}</p>
    </div>
  );
};

export default eachoverview;
