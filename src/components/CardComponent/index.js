import React from "react";
import "./index.css";
import { dashCardData } from "../../assets/Data";
import CardRateBox from "../CardRateBox";
import Card from 'react-bootstrap/Card';


const CardComponent = () => {
  return (
    <>
    <div className=" dash-card-box">
      {dashCardData.map((item,index) => (
        
       
          <div className="cardd">
            
            <div className="left">
            <div style={{background: item.bg}} className="dashcard-icon-box">
                <img src={item.icon} alt="icon"/>
            </div>
            <span >{item.title}</span>
            </div>
              <Card.Text className="right">
              <span className="black">{item.value}</span>
              <p>{item.text}</p>
              </Card.Text>
           
          </div>
       
      ))}

      <CardRateBox />

    </div> 



     
      </>
  );
};

export default CardComponent;
