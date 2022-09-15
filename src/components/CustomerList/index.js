import "./index.css";
import React from "react";
import CustomerListTableComponent from "../CustomerListTableComponent";
import CustomerListHeading from "../CustomerListHeading";
const CustomerList = () => {
  return (
    <>
      <CustomerListHeading/>
      <CustomerListTableComponent />
    </>
  );
};

export default CustomerList;
