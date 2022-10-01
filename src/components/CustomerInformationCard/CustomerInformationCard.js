import React from "react";
import "../CustomerOverview/Customeroverview";
import './style.css'
import { figurescard1 } from "../../assets/Data";
const CustomerInformationCard = ({heading}) => {
 
  return (
    <div className="fullBox1">
      <div className="filter">
        <p className="filterAccount">
        {heading}
        </p>
      </div>

      <div className="box">
        {figurescard1.map((figure) => {
          return (
            <div className="card" key={figure.id}>
              <div className="transaction_box">
                <div className="color" style={{ backgroundColor: figure.bg }}>
                  <img className="colorImg" src={figure.icon} alt="" />
                </div>
                <p className="transaction_num5">{figure.number}</p>
              </div>
              <div className="transaction_box1">
                <h2 className="transaction_num1">{figure.num6}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerInformationCard;



