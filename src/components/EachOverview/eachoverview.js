import React from "react";
import "./eachoverview.css";

const Eachoverview = ({ props, text ,setIsOverview,isOverview}) => {
  return (
    <div className="overview">
      <h2 className="title" onClick={()=>setIsOverview(!isOverview)}>
        {props}
      </h2>
      <p className="over">{text}</p>
    </div>
  );
};

export default Eachoverview;
