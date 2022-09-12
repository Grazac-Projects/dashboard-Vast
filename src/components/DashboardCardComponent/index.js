import React from "react";
import "./index.css";
import moment from "moment";
import CardComponent from "../CardComponent";
import CurrentRateCards from "../CurrentRateCards";

// import 

const DashboardCardComponent= () => {
  return (
    <div className='Dashboard-card-box'>
      <div className='left-cards-box'>
        <span className="heading">Business Overview</span>
        <CardComponent />
        {/* <GridExample /> */}
       
      </div>
      <div className='right-cards-box'>
        <div className='right-cards-heading-box'>
          <span>Current Rate</span>
          <span className='card-date'>
            {moment().format("Do MMMM YYYY, h:mm:ss a")}
          </span>
        </div>
        <CurrentRateCards />
      </div>
    </div>
  );
};

export default DashboardCardComponent;
