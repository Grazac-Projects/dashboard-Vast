import React from 'react'
import './index.css'
import { CustomerListTable } from '../../assets/Data'
const CustomerListTableComponent = () => {
  return (
    <div className='customer-list-table'>
        <table>
          <tr>
            <th>#</th>
            <th>Card ID</th>
            <th>Card Number</th>
            <th>User</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Date </th>
          </tr>
          {CustomerListTable.map((item, index) => {
            return (
              <tr>
                <td>{item.serialNo}</td>
                <td>{item.cardid}</td>
                <td>{item.cardnumber}</td>
                <td>
                  {item.user} <p>{item.phonenumber}</p>
                </td>
                <td>{item.balance} </td>
                <td>
                  <button className='table-btn1 table-btn2'>
                    {item.status}
                  </button>{" "}
                </td>
                <td>{item.datecreated} </td>
              </tr>
            );
          })}
        </table>
      </div>
  )
}

export default CustomerListTableComponent