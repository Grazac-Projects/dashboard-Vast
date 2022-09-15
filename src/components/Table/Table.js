import * as React from "react";
import "./Table.css";
import { Rows } from "../../assets/Data";

const Table = () => {
  return (
    <div className="dashboard-list-table">
      <table>
        <tr>
          <th>#</th>
          <th>TXN ID</th>
          <th>Details</th>
          <th>Category</th>
          <th>Type</th>
          <th>User</th>
          <th>Amount </th>
          <th>Service Fee</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        {Rows.map((item, index) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.txnid}</td>
              <td>
                {item.details} <p>{item.bank}</p>
              </td>
              <td style={{ color: item.color, height: item.height, border: item.shape}}>{item.category} </td>
              <td style={{ color: item.color}}>{item.type} </td>
              <td>
                {item.user} <p>{item.phonenumbers}</p>
              </td>
              <td>{item.amount} </td>
              <td>{item.service} </td>
              <td>
                <button className="table-btn2">
                  {item.status}
                </button>
                </td>
                <td style={{ textAlign: item.position}}>
                {item.date} <p>{item.time}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
