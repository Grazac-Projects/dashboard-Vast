import React from "react";
import icon3 from "../../assets/profile-2user.png";
import CustomerList from "../CustomerList";
import CustomerListHeading from "../CustomerListHeading";
import { figures } from "../../assets/Data";
import "../CustomerOverview/customeroverview";
import CustomerListTable2 from "../CustomerListTable2";
const customeroverview = () => {
  return (
    <>
      <div className='fullBox'>
        <div className='filter'>
          <p className='filterAccount'>User Overview</p>
        </div>

        <div className='box'>
          {figures.map((figure) => {
            return (
              <div className='card' key={figure.id}>
                <div className='transaction_box'>
                  <div className='color' style={{ backgroundColor: figure.bg }}>
                    <img className='colorImg' src={figure.icon} alt='' />
                  </div>
                  <p className='transaction_num5'>{figure.number}</p>
                </div>
                <div className='transaction_box1'>
                  <h2 className='transaction_num1'>{figure.num6}</h2>
                  <p className='transaction_num2'>{figure.num2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CustomerListHeading />
      <CustomerListTable2 />
    </>
  );
};

export default customeroverview;
