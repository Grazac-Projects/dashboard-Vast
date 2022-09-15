import React from 'react';
import { Link } from "react-router-dom";
import './index.css'

const CustomerListHeading = () => {
  return (
    <div className='customer-heading-main'>
        <div className='customer-list-heading'>
          <p className="customer-para">Customers List</p>
          <Link to ='/customerViewAll'className="customer-btn">View All</Link>
          {/* <button className="customer-btn">View All</button> */}
        </div>
      </div>
  )
}

export default CustomerListHeading