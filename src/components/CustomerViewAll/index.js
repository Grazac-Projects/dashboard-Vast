import "./index.css";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import CustomerListTable2 from "../CustomerListTable2";
const CustomerViewAll = () => {
  return (
    <>
      <div className="customer-heading-main-all">
        <div className="customer-listall-heading">
          <div className="customerlist-para">
            <p>Customer List</p>
          </div>
          <div className="customer-heading-items">
            <input type="text" placeholder="Search" />{" "}
            <FiSearch className="search-icon" />
            <div className="fiter-box">
              <span>Filter by Status</span> <IoIosArrowDown />
            </div>
            <div className="fiter-box">
              <span>Filter by Date Created</span> <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <CustomerListTable2 />
    </>
  );
};

export default CustomerViewAll;
