import React from "react";
import Prof from "../../assets/Image.png";
import Charges from "../../pages/Charges/Charges";
import TransactionTypes from "../TransactionTypes/TransactionTypes";
import TransactionCharges from "../TransactionCharges/transactioncharges";
import ArrowDown from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import "./background.css";
const Background = () => {
  return (
    <div className="background">
      <TransactionCharges link= {<Link to="/charges" >Transaction Charges</Link>} />
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