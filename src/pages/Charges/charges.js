import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import TransactionCharges from "../../components/TransactionCharges/transactioncharges";
import { Link } from "react-router-dom";
import TransactionTypes from "../../components/TransactionTypes/TransactionTypes";
const charges = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Transaction Charges" text="Transaction Overview" />
      <TransactionTypes />
    </div>
  );
};

export default charges;