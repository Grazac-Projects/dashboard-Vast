import Background from "../../components/Background/background";

import EachOverview from '../../components/EachOverview/eachoverview'

import React from 'react'
import CustomerViewAll from "../../components/CustomerViewAll";
import Pagination from "../../components/Pagination";

const CustomerViewAllPage = () => {
  return (
    <div>
         <Background />
      <EachOverview props='Customer' text='Customer Overview'/>
      <CustomerViewAll />
      <Pagination />
    </div>
  )
}

export default CustomerViewAllPage