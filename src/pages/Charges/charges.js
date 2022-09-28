import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import TransactionCharges from "../../components/TransactionCharges/transactioncharges";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import TransactionTypes from "../../components/TransactionTypes/TransactionTypes";


const Charges = () => {
  // const dispatch = useDispatch();
 
  

  return (
    <div>
      <Background />
      <EachOverview props="Transaction Charges" text="Transaction Overview" />
      <TransactionTypes />
    </div>
  );
};

export default Charges;