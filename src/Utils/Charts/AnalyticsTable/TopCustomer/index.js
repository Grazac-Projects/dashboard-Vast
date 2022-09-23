import React from 'react';
import './index.css';
import {MdKeyboardArrowDown} from 'react-icons/md';
import { CustomerListTable1 } from '../../../../assets/Data';

const TopCustomer = () => {
  return (
    <div className='Top10-customer-box'>
        <div className='analyticsTable-HeaderBox'>
            <span >Top 10 Customers</span>
            <div className='top-filter-box'>This Month <MdKeyboardArrowDown /></div>
        </div>
        <div className=''>
        <div className='analyticsTop-list-table '>
        <table className='analytic-table'>
          <tr>
            <th></th>
            <th>Customer Details</th>
            <th>Wallet Number</th>
            <th>TXN Value</th>
            <th>TXN Volume</th>
            
          </tr>
          {CustomerListTable1.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td className='identities'><img src = {item.identity} alt= ''/> {item.customer}</td>
                {/* <td className='identities'><img src = {item.identity} alt= ''/> {item.customer}</td> */}
                {/* <td>{item.walletnumber}</td> */}
                <td>{item.walletnumber}</td>
                <td>{item.taxvalue}</td>
                <td>{item.taxvolume}</td>

                
                {/* <td>
                  <button className='table-btn1 table-btn2'>
                    {item.status}
                  </button>{" "}
                </td> */}
            
              </tr>
            );
          })}
        </table>
      </div>
                
        </div>



    </div>
  )
}

export default TopCustomer