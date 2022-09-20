import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from '../../components/Table/Table';
import { Link } from "react-router-dom";
import ListHeader from '../../components/ListHeader/ListHeader';
import Pagination from "../../components/Pagination";

const Dashboard = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Dashboard" text="Transaction Overview" />
      <DashboardCardComponent />
      <ListHeader listType='Transaction List' link= {<Link to="/transactionViewAll" >View All</Link>} />
     <Table />
     {/* <Pagination /> */}
    </div>
  );
};

export default Dashboard;
