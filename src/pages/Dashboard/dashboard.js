import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from '../../components/Table/Table'
import ListHeader from '../../components/ListHeader/ListHeader';

const Dashboard = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Dashboard" text="Transaction Overview" />
      <DashboardCardComponent />
      <ListHeader listType='Transaction List'/>
      <Table/>
    </div>
  );
};

export default Dashboard;
