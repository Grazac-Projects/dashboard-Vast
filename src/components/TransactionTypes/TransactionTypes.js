import React from "react";
import Card_creation from "../Card_Creation_Box/Card_creation";
import Vast_to_Vast from "../Vast_to_Vast_Box/Vast_to_Vast";
import Vast_to_Bank from "../Vast_to_Bank_Box/Vast_to_Bank";
import Card_to_wallet from "../Card_to_Wallet_box/Card_to_wallet";
import Card_funding from "../Card_Funding_Box/Card_funding";
import Account_top_up from "../Account_top_Up_Box/Account_top_up";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {getvastchargesData} from '../../redux/Vast-charges'

const TransactionTypes = () => {
  const dispatch = useDispatch();

  const getchargedata = async () => {
   

    try {
      const charges = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/get-vast-charges"
      );
      // console.log(charges.data.data.charges);
      // console.log(plenty.data.userDetailsForAdmin);
      dispatch(getvastchargesData(charges.data.data.charges));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

 
  useEffect(() => {
    getchargedata();
    
  });


  return (
    <div className="TransactionTypes-box">
      <h6 className="type">Transaction types</h6>
      <div className="transactiontype-fullbox">
        <Card_creation />
        <Vast_to_Vast />
        <Vast_to_Bank />
        <Card_to_wallet />
        <Card_funding />
        <Account_top_up />
      </div>
    </div>
  );
};

export default TransactionTypes;
