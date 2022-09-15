import { figurescard } from "../../assets/Data";
import React from "react";
import "../CustomerOverview/customeroverview";
const cardsoverview = ({heading}) => {
 
  return (
    <>
    <div className="fullBox">
      <div className="filter">
        <p className="filterAccount">
        {heading}
        </p>
      </div>

      <div className="box">
        {figurescard.map((figure) => {
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
                <p className="transaction_num2">{figure.num2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {/* <CustomerList /> */}
    </>  
  );
 
};

export default cardsoverview;
