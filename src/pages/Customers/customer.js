import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import CustomerOverview from "../../components/CustomerOverview/customeroverview";
const customer = () => {
  return (
    <div>
                  <Background/>
            <EachOverview props='Customer' text='Customer Overview'/>
            <CustomerOverview />
    </div>
  );
};

export default customer;
