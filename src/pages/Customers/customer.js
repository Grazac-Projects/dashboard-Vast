import React from "react";
import { useState } from "react";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import Background from "../../components/Background/background";
import ListHeader from "../../components/ListHeader/ListHeader";
import EachOverview from "../../components/EachOverview/eachoverview";
import CustomerOverview from "../../components/CustomerOverview/customeroverview";
import CustomerListTable2 from "../../components/CustomerListTable2";
const Customer = () => {
  const [isOverview, setIsOverview] = useState(false);

  return (
    <div>
      <Background />
      <EachOverview
        props="Customer"
        text="Customer Overview"
        setIsOverview={setIsOverview}
        isOverview={isOverview}
      />
      {isOverview && <CustomerDetails />}
      {!isOverview && <CustomerOverview />}

      <ListHeader listType="Customers List" />
      <CustomerListTable2 />
    </div>
  );
};

export default Customer;
