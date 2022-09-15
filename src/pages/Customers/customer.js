import React from "react";
import { useState } from "react";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import CustomerOverview from "../../components/CustomerOverview/customeroverview";
const Customer = () => {
  const [isOverview, setIsOverview] = useState(false);

  return (
    <div>
      <Background />
      <EachOverview
        // handleClick={() => setIsOverview(!isOverview)}
        props="Customer"
        text="Customer Overview"
        setIsOverview={setIsOverview}
        isOverview={isOverview}
      />
      {isOverview && <CustomerDetails />}
      {!isOverview && <CustomerOverview />}
      {/* <CustomerOverview /> */}
      {/* <Form initialName="" /> */}
    </div>
  );
};

export default Customer;
