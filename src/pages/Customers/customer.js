// import picture from "../../../assets/picture.png";
// import ornament1 from "../../assets/Data/Ornament.png";
// import ornament1 from "../../assets";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import Background from "../../components/Background/background";
import ListHeader from "../../components/ListHeader/ListHeader";
import EachOverview from "../../components/EachOverview/eachoverview";
import CustomerOverview from "../../components/CustomerOverview/customeroverview";
import CustomerListTable2 from "../../components/CustomerListTable2";

const Customer = () => {
  const [isOverview, setIsOverview] = useState(false);
  const [isShowUser, setShowUser] = useState('');
  const details = [
    {
      id: 1,
      bgColor: "#292D9D",
      h4: "Customer Information",
      p: "Account Balance",
      total: "$540.98",
      firstname: "Deborah",
      lastname: "Dada",
      phonenumberss: "+234 807 3345 847",
      email: "shalomayokunnu@gmail.com",
      dob: "22-08-2000",
      gender: "Female",
      bvn: 12278403477,
      nin: 88843934945,
    },
  ];

  return (
    <div>
      <Background />
      <EachOverview
        props="Customer"
        text="Customer Overview"
        setIsOverview={setIsOverview}
        isOverview={isOverview}
      />
      {isOverview && <CustomerDetails detail={details} />}
      {!isOverview && <CustomerOverview />}

      <ListHeader setShowUser={setShowUser} listType='Customer List' link= {<Link to="/customerViewAll" >View All</Link>} />
      <CustomerListTable2  />
      {/* <ListHeader setShowUser={setShowUser} listType="Customers List" /> */}
      {/* <CustomerListTable2 /> */}
    </div>
  );
};

export default Customer;


