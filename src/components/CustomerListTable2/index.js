import './index.css'
import React from 'react';
import { customerListTwo } from '../../assets/Data';

const CustomerListTable2 = () => {
  return (
    <div className='customer-list-table'>
         <table>
          <tr>
            <th>#</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Date</th>
            
          </tr>
          {customerListTwo.map((index, item)=>{
            return(
              <tr>
                <td>hello</td>
                <td>{item.phoneNumber}</td>
                <td>{item.emailAddress}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            )
          })}
          </table>
    </div>
  )
}

export default CustomerListTable2