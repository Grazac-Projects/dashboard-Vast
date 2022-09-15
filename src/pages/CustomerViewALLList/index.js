
import React from 'react'
import Background from "../../components/Background/background";
// import CustomerList from '../../components/CustomerList';
import CustomerViewALL from '../../components/CustomerViewAll';
import EachOverview from '../../components/EachOverview/eachoverview'
const CustomerViewALLList = () => {
  return (
    <div>
      
      <Background/>
      <EachOverview props='Customer' text='Customer Overview'/>
      <CustomerViewALL />
    </div>
  )
}

export default CustomerViewALLList