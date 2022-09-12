import './index.css'
import successimg from '../../assets/Data/success.png'

import React from 'react'

const SucessRateModal = () => {
  return (
    <div className='success-modal-box'>
            <div className='success-content-box'>
                <div className='sucess-image-box'>
                    <img src={successimg} alt="sucess-img" />
                   
                </div>
                <span>Rate Changed Successfully</span>
                <button className='submit-btn'>Submit</button>

            </div>
    </div>
  )
}

export default SucessRateModal