import React from "react";
import CustomerInformationCard from "../../components/CustomerInformationCard/CustomerInformationCard";
import CustomerInformationTransaction from "../../components/CustomerInformationTransaction/CustomerInformationTransaction";
import { details } from "../../assets/Data";
import "./customerdetails.css";

const CustomerDetails = ({detail}) => {
  return (
    <div className="detailed">
      {details.map((detail, index) => {
        return (
          <div className="details2">
              <div className="info2">
                <h4>{detail.h4}</h4>
                <p>{detail.p}</p>
                <h2>{detail.total}</h2>
                {/* <img className="profileImage" src={detail.profile_image} alt="" /> */}
              </div>
              <div className="info">
                <div className="info3">
                  <div>
                    <h6>First Name</h6>
                    <p>{detail.firstname}</p>
                  </div>
                  <div>
                    <h6>Last Name</h6>
                    <p>{detail.lastname}</p>
                  </div>
                  <div>
                    <h6>Phone Number</h6>
                    <p>{detail.phonenumberss}</p>
                  </div>
                  <div >
                    <h6>Email</h6>
                    <p>{detail.email}</p>
                  </div>
                </div>
                <div className="info1">
                  <div>
                    <h6>Date of Birth</h6>
                    <p>{detail.dob}</p>
                  </div>
                  <div>
                    <h6>Gender</h6>
                    <p>{detail.gender}</p>
                  </div>
                  <div>
                    <h6>Bank Verification Number</h6>
                    <p>{detail.bvn}</p>
                  </div>
                  <div>
                    <h6>National Identification Number</h6>
                    <p>{detail.nin}</p>
                  </div>
                </div>
            </div>
          </div>
        );
      })}
      <div>
        <CustomerInformationCard heading="User Overview" />
        <CustomerInformationTransaction heading="Transaction Overview" />
      </div>
    </div>
  );
};
export default CustomerDetails;
