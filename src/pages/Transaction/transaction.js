import React, { useEffect } from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import TransactionOverview from "../../components/TransactionOverview/Transactionoverview";
import ListHeader from "../../components/ListHeader/ListHeader";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { useEffect } from 'react';

function Transaction() {
  // const dispatch = useDispatch();

  const getTrantableData = async () => {
    try {
      const transTable = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/history/all",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            // bearertoken:
          },
        }
      );
      console.log(transTable.data);

      // dispatch(saveData(plenty.data.userDetailsForAdmin));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

  useEffect(() => {
    getTrantableData();
  });

  return (
    <div>
      <Background />
      <EachOverview props='Transaction' text='Transaction Overview' />
      <TransactionOverview />
      <ListHeader
        listType='Transaction List'
        link={<Link to='/transactionViewAll'>View All</Link>}
      />
      <Table />
    </div>
  );
}

export default Transaction;
