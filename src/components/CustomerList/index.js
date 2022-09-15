import "./index.css";
// import { CustomerListTable } from "../../assets/Data";


// import Table from 'react-bootstrap/Table';

import React from "react";
import CustomerListTableComponent from "../CustomerListTableComponent";
import CustomerListHeading from "../CustomerListHeading";

// import { Form, NavDropdown } from "react-bootstrap";

const CustomerList = () => {
  return (
    <>
      <CustomerListHeading/>
      
      <CustomerListTableComponent />
    </>
  );
};

export default CustomerList;
