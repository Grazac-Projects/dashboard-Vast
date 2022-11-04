import React from "react";
import { useSelector } from "react-redux";
import icon2 from "../../assets/profile-2user.png";


// import { figure20, figure21, figure22 } from "../../assets/Data";
import "./Customeroverview";
const Customeroverview = () => {
  const volume = useSelector(
    (state) => state.customeruser.customerData
  );

  return (
    <div className="fullBox">
      <div className="filter">
        <p className="filterAccount">User Overview</p>
      </div>

      <div className="box">
        <div className="card">
          <div className="transaction_box">
            <div className="color" style={{ backgroundColor: '#29439D' }}>
              <img className="colorImg" src={icon2} alt="" />
            </div>
            <p className="transaction_num5">Total Users</p>
          </div>
          <div className="transaction_box1">
            <h2 className="transaction_num1">{volume.count}</h2>
            <p className="transaction_num2">4% (30 days)</p>
          </div>
        </div>
        <div className="card">
          <div className="transaction_box">
            <div className="color" style={{ backgroundColor: "#299D3B" }}>
              <img className="colorImg" src={icon2} alt="" />
            </div>
            <p className="transaction_num5">Active Users</p>
          </div>
          <div className="transaction_box1">
            <h2 className="transaction_num1">{volume.active}</h2>
            <p className="transaction_num2">4% (30 days)</p>
          </div>
        </div>
        <div className="card">
          <div className="transaction_box">
            <div className="color" style={{ backgroundColor: "#CB0A0A" }}>
              <img className="colorImg" src={icon2} alt="" />
            </div>
            <p className="transaction_num5">Inactive Users</p>
          </div>
          <div className="transaction_box1">
            <h2 className="transaction_num1">{volume.inactive}</h2>
            <p className="transaction_num2">4% (30 days)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customeroverview;
