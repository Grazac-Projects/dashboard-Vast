import React from 'react';
import {useState} from 'react';
import './index.css';
import editicon from '../../assets/Data/Vector.png'
import EditRateComponent from '../EditRateComponent';
// import DashboardCardComponent from '../DashboardCardComponent';

const CardRateBox = () => {
    const [modalShow, setModalShow] =useState(false);
    const handleclick=()=>{
      setModalShow(true);
  
      
      
    }
  return (
    <>
    
    <div className="edit-rate-card ">
                
            <div className="rate-value-box">
                <span>Naira to dollar Rate</span>
                <p>₦702.98/$1</p>

               <div className="rate-m">
               <span >Dollar</span>
                <p>₦702.98/$1</p>
               </div>
            </div>
                <div className='rate'  onClick={handleclick}>
                   
               
                <span><img src ={editicon} alt="edit-rate-icon" /></span>
                <span className='edit'>Edit Rate</span>
               
            </div>
            {modalShow &&
            <EditRateComponent />
            }
           

      </div>
     
    
      </>
   
  )
}

export default CardRateBox