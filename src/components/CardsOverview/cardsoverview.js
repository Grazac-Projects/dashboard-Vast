
import React from "react";
import "../CustomerOverview/customeroverview";
import icon3 from "../../assets/card1.png";

import { useSelector, useDispatch } from 'react-redux'
// import { useSelector } from "react-redux";


const CardsOverview = ({ heading }) => {
 
  const cards = useSelector((state) => state.vastInfocards.vastcardinfoData);
  return (
    <>
      <div className='fullBox'>
        <div className='filter'>
          <p className='filterAccount'>{heading}</p>
        </div>

        <div className='box'>
          <div className='card'>
            <div className='transaction_box'>
              <div className='color' style={{ backgroundColor: '#4E75D9"' }}>
                <img className='colorImg' src={icon3} alt='' />
              </div>
              <p className='transaction_num5'>Total Cards</p>
            </div>
            <div className='transaction_box1'>
              <h2 className='transaction_num1'>{cards.totalCards}</h2>
              <p className='transaction_num2'>4% (30 days)</p>
            </div>
          </div>
          <div className='card'>
            <div className='transaction_box'>
              <div className='color' style={{ backgroundColor: '#0ACB35"' }}>
                {/* <img  src={icon3} alt='' /> */}
                <img  className='colorImg'src={icon3} alt="icon"/>
              </div>
              <p className='transaction_num5'>Active Cards</p>
            </div>
            <div className='transaction_box1'>
              <h2 className='transaction_num1'> {cards.totalActiveCards}</h2>
              <p className='transaction_num2'>4% (30 days)</p>
            </div>
          </div>
          <div className='card'>
            <div className='transaction_box'>
              <div className='color' style={{ backgroundColor: '#CB0A0A"' }}>
                <img className='colorImg' src={icon3} alt='' />
              </div>
              <p className='transaction_num5'>Inactive Cards</p>
            </div>
            <div className='transaction_box1'>
              <h2 className='transaction_num1'>{cards.totalInactiveCards}</h2>
              <p className='transaction_num2'>4% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomerList /> */}
    </>
  );
};

export default CardsOverview;
