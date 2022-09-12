import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from '../../components/Table/Table'

const Dashboard = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Dashboard" text="Transaction Overview" />
      <DashboardCardComponent />
      <Table/>
    </div>
  );
};

export default Dashboard;
