import { figurescard } from "../../assets/Data";
import React from "react";
<<<<<<< HEAD
import "../CustomerOverview/customeroverview";
import { figurescard } from "../../assets/Data";
const cardsoverview = ({heading}) => {
=======
import icon3 from "../../assets/card1.png";
import CustomerList from "../CustomerList";
import CustomerListHeading from "../CustomerListHeading";
import CustomerListTableComponent from "../CustomerListTableComponent";
import "../CustomerOverview/customeroverview";

const cardsoverview = ({heading}) => {
    const figures = [
    {
      id: 1,
      icon: icon3,
      number: "Total Cards",
      num6: 926,
      num2: "4% (30 days)",
      bg: "#4E75D9",
    },
    {
      id: 2,
      icon: icon3,
      number: "Active Cards",
      num6: 920,
      num2: "4% (30 days))",
      bg: "#0ACB35",
    },
    {
      id: 3,
      icon: icon3,
      number: "Inactive Cards",
      num6: 6,
      num2: "4% (30 days)",
      bg: "#CB0A0A",
    },
  ];
// import "../CustomerOverview/customeroverview";
// const cardsoverview = ({heading}) => {
>>>>>>> 89567cccdf93eaf5d0522c07dcf40f73a4556408
 
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
    <CustomerListHeading />
    <CustomerListTableComponent />
    {/* <CustomerList /> */}
    </>  
  );
 
};

export default cardsoverview;
