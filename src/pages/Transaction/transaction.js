import React from 'react'
import Background from "../../components/Background/background";
import EachOverview from '../../components/EachOverview/eachoverview'
import TransactionOverview from '../../components/TransactionOverview/transactionoverview'
import ListHeader from '../../components/ListHeader/ListHeader';
import Table from '../../components/Table/Table'
import { Link } from 'react-router-dom';
import axios from "axios";
// import { useDispatch } from 'react-redux';




function transaction() {
  // const dispatch = useDispatch();

  const getTrantableData = async () => {
    try {
      const transTable = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/users/count",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(plenty.data);
      // console.log(plenty.data.userDetailsForAdmin);

      dispatch(saveData(plenty.data.userDetailsForAdmin));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };


  return (
    <div>
            <Background/>
            <EachOverview props='Transaction' text='Transaction Overview'/>
            <TransactionOverview />
            <ListHeader listType='Transaction List' link= {<Link to="/transactionViewAll" >View All</Link>}
           />
        <Table/>
    </div>
  )
}

export default transaction