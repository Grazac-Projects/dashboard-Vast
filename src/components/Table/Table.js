import * as React from "react";
import "./Table.css";
import { Rows } from "../../assets/Data";


const resolveCategory=(category)=>{
  if(category==='debit'){
    return  'debit withdrawal';
  }
  if(category==='carddebit'){
    return  'debit';
  }
  if(category==='credit'){
    return  'credit';
  }
  if(category==='cardcredit'){
    return  'credit';
  }
  if(category==='wallet'){
    return  'wallet';
  } 
}
const resolveStatus=(status)=>{
  const statusConvert= status.toLowerCase()
  console.log(statusConvert);
    if(statusConvert==='success'){
      return  'table-btn6';
    }
    if(statusConvert==='pending'){
      return  'table-btn3';
    }
    if(statusConvert==='failed'){
      return  'table-btn4';
    }
}
// import { useSelector } from "rezact-redux";

const Table = ({ data }) => {
  return (
    <div className='dashboard-list-table'>
      <table>
        <tr>
          <th>#</th>
          {/* <th>TXN ID</th> */}
          <th>Details</th>
          <th>Category</th>
          <th>Type</th>
          <th>User</th>
          <th>Amount </th>
          <th>Service Fee</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{item.id}</td>
              {/* <td>{item.transactionId}</td> */}
              <td>
                {item.details} <p>{item.bank}</p>
              </td>
              <td>
              <button className={resolveCategory(item.category)} >   {item.category}  </button>
              </td>
              <td className='cardfunding'> {item.type}</td>
              <td>
                {item.name} <p>{item.phonenumbers}</p>
              </td>
              <td>{item.amount} </td>
              <td>{item.fee} </td>
              <td>
                <button className={resolveStatus(item.status)} >   {item.status}  </button>
              </td>
              <td style={{ textAlign: item.position }}>
                {item.localDate} <p>{item.time}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
