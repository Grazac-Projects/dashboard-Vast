import React, { useEffect } from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import ListHeader from "../../components/ListHeader/ListHeader";

import { useDispatch } from "react-redux";
import { saveData } from "../../redux/admin-data";

import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
 
  const getData = async () => {
   

    try {
      const plenty = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/users/count"
      );
      console.log(plenty.data);
      console.log(plenty.data.userDetailsForAdmin);
      dispatch(saveData(plenty.data.userDetailsForAdmin));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

 
  useEffect(() => {
    getData();
    
  });
  return (
    <div>
      <Background />

      <EachOverview props='Dashboard' text='Transaction Overview' />
      <DashboardCardComponent />
      

      <ListHeader
        listType='Transaction List'
        link={<Link to='/transactionViewAll'>View All</Link>}
      />
      <Table />
     
    </div>
  );
};

export default Dashboard;
