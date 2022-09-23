import React from 'react'
import TopCustomer from './TopCustomer'
import './index.css'
import BottomCustomer from './BottomCustomer'

const AnalyticsTable = () => {
  return (
    <div className='main-analyticstable-box'>
        <div className='analyticsTables-box'>
        <TopCustomer />
        <BottomCustomer />
    </div>
    </div>
  )
}

export default AnalyticsTable