import React, { useEffect, useState } from "react";
import { getTransactionHistory } from "../../api/Transactiondetails";

import Background from "../../components/Background/background";
// import CustomerList from '../../components/CustomerList';
// import CustomerViewALL from '../../components/CustomerViewAll';
import EachOverview from "../../components/EachOverview/eachoverview";
import Pagination from "../../components/Pagination";
import TransactionViewAllPage from "../../components/TransactionViewAllPage";
const TransactionViewALL = () => {
 
  return (
    <div>
      <Background />
      <EachOverview props="Transaction" text="Transaction Overview" />
      <TransactionViewAllPage />
      <Pagination />
    </div>
  );
};

export default TransactionViewALL;
