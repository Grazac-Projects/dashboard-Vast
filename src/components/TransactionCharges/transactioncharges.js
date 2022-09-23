import React from "react";
import "../Background/background.css";
import money1 from "../../assets/money-4.png";

const transactioncharges = ({link}) => {
  return (
    <div>
      <div className="outer">
        <img src={money1} alt="" />
        <p className="charges">{link}</p>
      </div>
    </div>
  );
};

export default transactioncharges;