import './index.css';
import failedimg from '../../assets/Data/fail.png'
import { CgCloseO } from "react-icons/cg";


import React from 'react'

const FailedRate = ({closeModal}) => {
  return (
    <div className='failed-modal-box'>
            <div className='failed-content-box'>
                <div className='failed-image-box'>
                    <img src={failedimg} alt="failed-img" />
                   
                </div>
                <span>Rate Change Failed</span>
                <button className='submit-btn'>Submit</button>
                <CgCloseO onClick={()=> closeModal(false)} className="close" />

            </div>
    </div>
  )
}

export default FailedRate