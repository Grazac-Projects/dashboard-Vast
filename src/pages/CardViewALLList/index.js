
import React from 'react'
import Background from "../../components/Background/background";
import CardViewALL from '../../components/CardViewAll';
// import CustomerList from '../../components/CustomerList';
import CustomerViewALL from '../../components/CardViewAll';
import EachOverview from '../../components/EachOverview/eachoverview'
import Pagination from '../../components/Pagination';
const CardViewALLList = () => {
  return (
    <div>
      <Background />
      <EachOverview props='Cards' text='Cards Overview'/>
      <CustomerViewALL />
      <Pagination />
    </div>
  )
}

export default CardViewALLList