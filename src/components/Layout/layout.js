import React from "react";
import first from "../../assets/card-receive.png";
import second from "../../assets/card-slash.png";
import third from "../../assets/dollar-square.png";
import fourth from "../../assets/empty-wallet.png";
import fifth from "../../assets/money-3.png";
import sixth from "../../assets/receipt-2.png";
import seventh from "../../assets/receipt-text.png";
import eighth from "../../assets/Vector.png";
import "./layout.css";
const layout = () => {
  return (
    <div className="layout">
      <div className="layout1">
        <img src={fourth} alt="" />
        <img src={first} alt="" />
        <img src={third} alt="" />
        <img src={sixth} alt="" />
        <img src={fifth} alt="" />
        <img src={seventh} alt="" />
      </div>
      <div className="layout2">
        <img src={sixth} alt="" />
        <img src={second} alt="" />
        <img src={fourth} alt="" />
        <img src={sixth} alt="" />
        <img src={eighth} alt="" />
      </div>
      <div className="layout3">
        <img src={fourth} alt="" />
        <img src={first} alt="" />
        <img src={third} alt="" />
        <img src={fifth} alt="" />
        <img src={sixth} alt="" />
        <img src={seventh} alt="" />
      </div>
      <div className="layout4">
        <img src={second} alt="" />
        <img src={sixth} alt="" />
        <img src={fourth} alt="" />
        <img src={sixth} alt="" />
        <img src={eighth} alt="" />
      </div>
      <div className="layout1">
        <img src={sixth} alt="" />
        <img src={fourth} alt="" />
        <img src={first} alt="" />
        <img src={third} alt="" />
        <img src={seventh} alt="" />
        <img src={fifth} alt="" />
      </div>
      <div className="layout2">
        <img src={sixth} alt="" />
        <img src={second} alt="" />
        <img src={fourth} alt="" />
        <img src={sixth} alt="" />
        <img src={eighth} alt="" />
      </div>
      <div className="layout3">
        <img src={fourth} alt="" />
        <img src={first} alt="" />
        <img src={third} alt="" />
        <img src={sixth} alt="" />
        <img src={seventh} alt="" />
        <img src={fifth} alt="" />
      </div>
    
    </div>
  );
};

export default layout;
