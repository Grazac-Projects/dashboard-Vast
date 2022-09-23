import React from "react";
import users from "../../assets/profile-2user.png";
import  wallet from "../../assets/Data/wallet.png";
import money from "../../assets/moneys.png";
import document from "../../assets/Data/document.png";
import startups from "../../assets/status-up.png";
import "./index.css";
// import { dashCardData } from "../../assets/Data";
import CardRateBox from "../CardRateBox";
import Card from 'react-bootstrap/Card';


import { useSelector } from "react-redux";

const CardComponent = () => {
  const measure = useSelector((state) => state.admindata.dashboardData);
  
  return (
    <>
    <div className=" dash-card-box">
    
        
      
          <div className="cardd" >
            
            <div className="left">
            <div style={{background:"#3484ED"}} className="dashcard-icon-box">
                <img src={users} alt="icon"/>
            </div>
            <span >Total Users</span>
            </div>
              <Card.Text className="right">
              <span className="black">{measure.count}</span>
              <p>4% (30 days)</p>
              </Card.Text>
           
          </div>
          <div className="cardd" >
            
            <div className="left">
            <div style={{background:"#292D9D"}} className="dashcard-icon-box">
                <img src={wallet} alt="icon"/>
            </div>
            <span >Mono Wallet Balance</span>
            </div>
              <Card.Text className="right">
              <span className="black">₦60,540,926.00</span>
              <p></p>
              </Card.Text>
           
          </div>
          <div className="cardd" >
            
            <div className="left">
            <div style={{background:"#299D3B"}} className="dashcard-icon-box">
                <img src={money} alt="icon"/>
            </div>
            <span >Transaction Value</span>
            </div>
              <Card.Text className="right">
              <span className="black">₦60,540,926.00</span>
              <p>4% (30 days)</p>
              </Card.Text>
           
          </div>
          <div className="cardd" >
            
            <div className="left">
            <div style={{background:"#050505"}} className="dashcard-icon-box">
                <img src={document} alt="icon"/>
            </div>
            <span >Transaction Volume</span>
            </div>
              <Card.Text className="right">
              <span className="black"></span>
              <p>4% (30 days)</p>
              </Card.Text>
           
          </div>
          <div className="cardd" >
            
            <div className="left">
            <div style={{background:"#CBA00A"}} className="dashcard-icon-box">
                <img src={startups} alt="icon"/>
            </div>
            <span >Revenue</span>
            </div>
              <Card.Text className="right">
              <span className="black">₦540,926.00</span>
              <p>4% (30 days)</p>
              </Card.Text>
           
          </div>



          
          
         
       
      {/* ))} */}

      <CardRateBox />

    </div> 



     
      </>
  );
};

export default CardComponent;
