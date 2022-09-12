import React from "react";
import icon3 from "../../assets/profile-2user.png";
import "../CustomerOverview/customeroverview";
const customeroverview = () => {
  const figures = [
    {
      id: 1,
      icon: icon3,
      number: "Total Users",
      num6: 926,
      num2: "4% (30 days)",
      bg: "#4E75D9",
    },
    {
      id: 2,
      icon: icon3,
      number: "Active Users",
      num6: 920,
      num2: "4% (30 days))",
      bg: "#0ACB35",
    },
    {
      id: 3,
      icon: icon3,
      number: "Inactive Users",
      num6: 6,
      num2: "4% (30 days)",
      bg: "#CB0A0A",
    },
  ];
  return (
    <div className="fullBox">
      <div className="filter">
        <p className="filterAccount">
          User Overview
        </p>
      </div>

      <div className="box">
        {figures.map((figure) => {
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
  );
};

export default customeroverview;
