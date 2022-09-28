
import './index.css'
import React from 'react';
import { customerListTwo } from '../../assets/Data';
import { CustomerListTable1 } from "../../assets/Data";

const CustomerListTable2 = ({ setShowUser }) => {
  return (
    <div className="customer-list-table">
      <table>
        <tr>
          <th>#</th>
          <th>Customer Details</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        {CustomerListTable1.map((item, index) => {
          return (
            <tr
              onClick={() => {
                console.log(item.id);
                setShowUser({
                  
                })
              }}
            >
              <td>{item.id}</td>
              <td className="identities">
                <img src={item.identity} alt="" /> {item.customer}
              </td>
              <td>{item.number}</td> 
              <td>{item.email} </td>
              <td>
                <button className="table-btn1 table-btn2">{item.status}</button>{" "}
              </td>
              <td>{item.date} </td>
            </tr>
          );
        })}
      </table>

    </div>
  );
};

export default CustomerListTable2;
