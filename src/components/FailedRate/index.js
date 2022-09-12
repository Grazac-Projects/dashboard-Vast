import './index.css';
import failedimg from '../../assets/Data/fail.png'


import React from 'react'

const FailedRate = () => {
  return (
    <div className='failed-modal-box'>
            <div className='failed-content-box'>
                <div className='failed-image-box'>
                    <img src={failedimg} alt="failed-img" />
                   
                </div>
                <span>Rate Change Failed</span>
                <button className='submit-btn'>Submit</button>

            </div>
    </div>
  )
}

export default FailedRate