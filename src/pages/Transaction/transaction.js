import React, { useEffect, useState } from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import TransactionOverview from "../../components/TransactionOverview/Transactionoverview";
import ListHeader from "../../components/ListHeader/ListHeader";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { saveData } from "../../redux/admin-data";
import transactionDetails from '../../redux/Transactiontable-details'
import { getTransactionHistory } from "../../api/Transactiondetails";

// import Spiner from "../../components/Spiner";
// import { useEffect } from 'react';

function Transaction() {
const [trasaction, setTransaction] = useState(false) 
  useEffect(() => {
    (async () => {
     let data = await getTransactionHistory()
     setTransaction(data);
    })();

  },[])
  



  
  

  return (
    <div>
      <Background />
      <EachOverview props='Transaction' text='Transaction Overview' />
      <TransactionOverview />
      {/* <Spiner /> */}
      <ListHeader
        listType='Transaction List'
        link={<Link to='/transactionViewAll'>View All</Link>}
      />
     {/* {trasaction?  <Table data={trasaction}  />:} */}

    </div>
  );
}

export default Transaction;
