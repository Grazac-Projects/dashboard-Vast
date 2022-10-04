import React from "react";
import arrow from "../../assets/arrow.svg";
import { figures } from "../../assets/Data";
import "./transactionoverview.css";
// import { useSelector } from "react-redux";



const Transactionoverview = () => {
  
// const transactionValues = useSelector((state)=>state.vastInfocards.vastcardinfoData);
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

export default Transactionoverview;
