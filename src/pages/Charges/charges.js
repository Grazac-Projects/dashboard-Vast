import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import TransactionCharges from "../../components/TransactionCharges/transactioncharges";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
import TransactionTypes from "../../components/TransactionTypes/TransactionTypes";
import { useDispatch } from "react-redux";
import { getvastchargesData } from "../../redux/Vast-charges";
import { getvastcharges } from "../../api/GetvastCharges";


const Charges = () => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      dispatch(getvastchargesData(await getvastcharges()));
     
    
    })();

  });
  

  return (
    <div>
      <Background />
      <EachOverview props="Transaction Charges" text="Transaction Overview" />
      <TransactionTypes />
    </div>
  );
};

export default Charges;