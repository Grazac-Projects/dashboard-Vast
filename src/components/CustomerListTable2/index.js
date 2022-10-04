import "./index.css";
import React from "react";
import { customerListTwo } from "../../assets/Data";
import { CustomerListTable1 } from "../../assets/Data";
import { useState } from "react";
import { useSelector } from "react-redux";
const CustomerListTable2 = ({ setShowUser }) => {
  const [users, setusers] = useState([]);
  const customerdetails = useSelector(
    (state) => state.CustomerDetails.CustomersdetailsData
  );
  // console.log(customerdetails[0]);
  const phoneNo = customerdetails.map((i) =>i.phoneNo);
  

  return (
    <div className='customer-list-table'>
      <table>
        <tr>
          <th>#</th>
          <th>Customer Details</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        {customerdetails
          ? customerdetails.map((item, index) => {
              return (
                <tr
                  onClick={() => {
                    console.log(item.id);
                    setShowUser({});
                  }}
                >
                  <td>{index + 1}</td>
                  {/* <td>{item.id}</td> */}
                  <td className='identities'>
                    <img src={item.identity} alt='' /> {item.name}
                  </td>
                  <td>{item.phoneNo}</td>
                  <td>{item.username} </td>
                  <td>
                    {/* {item.gender} */}
                    {item.status}
                  </td>
                  <td>{item.localDateTime} </td>
                </tr>
              );
            })
          : null}
      </table>
    </div>
  );
};

export default CustomerListTable2;
