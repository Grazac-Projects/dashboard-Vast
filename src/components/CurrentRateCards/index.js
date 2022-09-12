import './index.css';
import { currentrateData } from '../../assets/Data';
import React from 'react'

const CurrentRateCards = () => {
  return (
   <div className='currentCard-box'>
        {currentrateData.map((item, index)=>{
            return(
                <div className='currentrate-card' 
                style={{ backgroundColor:item.bgColor,
              backgroundImage:`url(${item.pattern})` }}>
                           
                        <span>{item.title}</span>
                        <p>{item.rate}</p>
                     </div>
            )
        })}
   </div>

  )
}

export default CurrentRateCards