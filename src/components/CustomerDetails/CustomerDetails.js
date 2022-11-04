import React from "react";
import CustomerInformationCard from "../../components/CustomerInformationCard/CustomerInformationCard";
import CustomerInformationTransaction from "../../components/CustomerInformationTransaction/CustomerInformationTransaction";
import { details } from "../../assets/Data";
import "./customerdetails.css";

const CustomerDetails = ({ customerinfo }) => {
  console.log(customerinfo);
  return (
    <div className='detailed'>
      <div className='details2'>
        <div className='info2'>
          <h4>Customer Information</h4>
          <p>Account Balance</p>
          <h2>{customerinfo.balance}</h2>
          <img
            className='profileImage'
            src={customerinfo.image}
            alt=''
          />
        </div>
        <div className='info'>
          <div className='info3'>
            <div>
              <h6>First Name</h6>
              <p>{customerinfo.firstName}</p>
            </div>
            <div>
              <h6>Last Name</h6>
              <p>{customerinfo.lastName}</p>
            </div>
            <div>
              <h6>Phone Number</h6>
              <p>{customerinfo.phoneNo}</p>
            </div>
            <div>
              <h6>Email</h6>
              <p>{customerinfo.username}</p>
            </div>
          </div>
          <div className='info1'>
            <div>
              <h6>Date of Birth</h6>
              <p>{customerinfo.dob}</p>
            </div>
            <div>
              <h6>Gender</h6>
              <p>{customerinfo.gender}</p>
            </div>
            <div>
              <h6>Bank Verification Number</h6>
              <p>{customerinfo.bvn}</p>
            </div>
            <div>
              <h6>National Identification Number</h6>
              <p>{customerinfo.nin}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CustomerInformationCard heading='User Overview' />
        <CustomerInformationTransaction heading='Transaction Overview' />
      </div>
    </div>
  );
};
export default CustomerDetails;
