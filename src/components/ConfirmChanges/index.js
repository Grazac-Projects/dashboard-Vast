import './index.css';

import React from 'react'

const ConfirmChanges = () => {
  return (
    <div className='confirm-changes-modalbox'>
        <div className='confirm-changes-box'>
                <span>Confirm Changes </span>
                <div className='form-box'>
                    <input type="text" placeholder='Enter Password' className='confirm-input' />
                    <button className='submit-btn'>Submit</button>
                </div>
        </div>
        
    </div>
  )
}

export default ConfirmChanges