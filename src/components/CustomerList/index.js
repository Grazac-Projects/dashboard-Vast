import "./index.css";

import React from "react";
import { Form, NavDropdown } from "react-bootstrap";

const CustomerList = () => {
  return (
    <div className='customer-list-table'>
      <div className='customer-table-heading'>
        <div className=''>
          <span>Customer Details</span>
        </div>
        <div className='transaction-filter'>
          <Form.Control type='search'
              placeholder="Search"
              className="me-2"
              aria-label="Search" title='Dropdown' id='nav-dropdown'>
            <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
            <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey='4.3'>
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
          </Form.Control>
        </div>
        <div className='stautus-filter'></div>
        <div className='dated-filter'></div>
      </div>
    </div>
  );
};

export default CustomerList;
