import React from "react";
import Prof from "../../assets/Image.png";
import ArrowDown from "../../assets/arrow.svg";
import "./background.css";
const Background = () => {
  return (
    <div className="background">
      <div className="Inner">
        <img src={Prof} alt="profile" />
        <div className="carter">
          <h3>Carter Kenter</h3>
          <p>Admin</p>
        </div>
        <img src={ArrowDown} alt="arrow" />
      </div>
    </div>
  );
};

export default Background;
