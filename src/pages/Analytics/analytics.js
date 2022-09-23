import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import AnalyticsTable from "../../Utils/Charts/AnalyticsTable";
import BarChart from "../../Utils/Charts/BarChart";
import BarChart2 from "../../Utils/Charts/BarChart2";
import BarChart3 from "../../Utils/Charts/BarChart3";
import BarChat4 from "../../Utils/Charts/BarChat4";
import Piechart from "../../Utils/Charts/Piechart";
// import PieChart2 from "../../Utils/Charts/PieChart2";

const analytics = () => {
  return (
    <div>
      <Background />

      <EachOverview props='Analytics' text='Customer Overview' />

      <BarChart />
      <BarChart2 />
      <BarChart3 />
      {/* <BarChat4 /> */}
      <Piechart />
      <AnalyticsTable />
    </div>
  );
};

export default analytics;
