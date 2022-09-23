import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
// import BarChart from '../../Utils/Charts/BarChart';

const analytics = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Analytics" text="Customer Overview" />
      <h2>hello</h2>
      {/* <BarChart /> */}
    </div>
  );
};

export default analytics;
