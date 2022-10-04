import "./index.css";
import { CgCloseO } from "react-icons/cg";
import React from "react";
import { useState } from "react";

console.log('hello')

const EditRateComponent = ({closeModal}) => {
  const [values, setValues]=useState({
    buyingCharges:'',
    sellingCharges:''
  })

  const ChangeHandler =(event)=>{
   console.log(event.target);
   const {name, value}  = event.target;
   setValues({ })
  }
  return (
    <div className='popup-box'>
      <div className='popup-content-box'>
        <div className='top-modal-box'>
          <div className='modal-header'>
            <span className="edit">Edit Vast Exchange Rate</span>
          </div>
        </div>
        <div className='screen-box'>
          <div className='modal-screen'>
            <span className='convert-heading'>Current Rate</span>
            <div className='modal-screen-body'>
              <div className='left-screen'>
              <span className='convert-heading'>Naira to dollar Rate</span>
                <p>₦702.98/$1</p>
              </div>
              <div className='right-screen'>
                <span className='convert-heading'>Dollar to Naira</span>
                <p>₦702.98/$1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-form-box">
               <form>
               <div className="form-box">
                    <div className="form-one">
                        <span>Naira to Dollar Rate</span>
                        <div className="main-input-box">
                            <div className="sign-box">₦ |</div>
                            <input type="text" placeholder ="Naira Equivalent" value={values.buyingCharges} onChange={ChangeHandler}/>
                        </div>
                    </div>
                    <div className="form-one mt-3">
                        <span>Dollar to Naira Rate</span>
                        <div className="main-input-box">
                            <div className="sign-box">₦ |</div>
                            <input type="text" placeholder ="Naira Equivalent" value={values.sellingCharges} onChange={ChangeHandler}/>
                        </div>
                    </div>
                    <button className="rate-btn ">Set New Rate</button>

                </div>
               </form>
               
        </div>

      </div>
      <CgCloseO onClick={()=> closeModal(false)} className="close" />

    </div>
  );
};

export default EditRateComponent;
