import React from "react";
import Prof from "../../assets/Image.png";
import money1 from "../../assets/money-4.png";
import ArrowDown from "../../assets/arrow.svg";
import "./background.css";
const Background = () => {
  return (
    <div className="background">
      <div className="outer">
        <img src={money1} alt="" />
        <p className="charges">Transaction Charges</p>
      </div>
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
