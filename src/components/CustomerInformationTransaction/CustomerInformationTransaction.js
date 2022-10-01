import React from "react";
import "../CustomerOverview/Customeroverview";
import '../CustomerInformationCard/style.css'
import { figurescard2 } from "../../assets/Data";
const CustomerInformationTransaction = ({heading}) => {
 
  return (
    <div className="fullBox1">
      <div className="filter">
        <p className="filterAccount">
        {heading}
        </p>
      </div>

      <div className="box">
        {figurescard2.map((fig) => {
          return (
            <div className="card" key={fig.id}>
              <div className="transaction_box">
                <div className="color" style={{ backgroundColor: fig.bg }}>
                  <img className="colorImg" src={fig.icon} alt="" />
                </div>
                <p className="transaction_num5">{fig.number}</p>
              </div>
              <div className="transaction_box1">
                <h2 className="transaction_num1">{fig.num6}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerInformationTransaction;
