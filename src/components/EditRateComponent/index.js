import "./index.css";

import React from "react";

const EditRateComponent = () => {
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
                <div className="form-box">
                    <div className="form-one">
                        <span>Naira to Dollar Rate</span>
                        <div className="main-input-box">
                            <div className="sign-box">₦ |</div>
                            <input type="text" placeholder ="Naira Equivalent"/>
                        </div>
                    </div>
                    <div className="form-one mt-3">
                        <span>Dollar to Naira Rate</span>
                        <div className="main-input-box">
                            <div className="sign-box">₦ |</div>
                            <input type="text" placeholder ="Naira Equivalent"/>
                        </div>
                    </div>
                    <button className="rate-btn ">Set New Rate</button>

                </div>
               
        </div>

      </div>
    </div>
  );
};

export default EditRateComponent;
