import React from "react";
import icon1 from "../../assets/moneys.png";
import icon2 from "../../assets/status-up.png";
import arrow from "../../assets/arrow.svg";
import "./transactionoverview.css";
const transactionoverview = () => {
  const figures = [
    {
      id: 1,
      icon: icon1,
      number: "Total Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#29439D",
    },
    {
      id: 2,
      icon: icon1,
      number: "Successful Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#299D3B",
    },
    {
      id: 3,
      icon: icon1,
      number: "Pending Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#9D9129",
    },
    {
      id: 4,
      icon: icon1,
      number: "Failed Transaction",
      num1: "₦60,540,926.0",
      num2: "4% (30 days)",
      num3: 260,
      num4: "4% (30 days)",
      bg: "#9D2929",
    },
    {
      id: 5,
      icon: icon2,
      number: "Revenue",
      num1: "₦540,926.0",
      num2: "4% (30 days)",
      bg: "#B00ACB",
    },
  ];
  return (
    <div className="fullBox">
      <div className="filter">
        <p className="filterAccount">
          Transaction Overview - <span>Account Top Up</span>
        </p>
        <div className="filterType">
          <p>Filter by Transaction type</p>
          <img src={arrow} alt='arrow'/>
        </div>
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
                <h2 className="transaction_num1">{figure.num1}</h2>
                <p className="transaction_num2">{figure.num2}</p>
                <h2 className="transaction_num3">{figure.num3}</h2>
                <p className="transaction_num4">{figure.num4}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <main>{}</main> */}
    </div>
  );
};

export default transactionoverview;
