// import picture from "../../../assets/picture.png";
// import ornament1 from "../../assets/Data/Ornament.png";
// import ornament1 from "../../assets";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import Background from "../../components/Background/background";
import ListHeader from "../../components/ListHeader/ListHeader";
import EachOverview from "../../components/EachOverview/eachoverview";
import CustomerOverview from "../../components/CustomerOverview/Customeroverview";
import CustomerListTable2 from "../../components/CustomerListTable2";
import { savecustomercardData } from "../../redux/customeruser";

const Customer = () => {
  const dispatch = useDispatch();

  const getcustomerData = async () => {
    try {
      const hit = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/users/count"
      );
      console.log(hit.data);
      // console.log(hit.data.userDetailsForAdmin);
      dispatch(savecustomercardData(hit.data.userDetailsForAdmin));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

  useEffect(() => {
    getcustomerData();
  }, []);
  
  const [isOverview, setIsOverview] = useState(false);
  const [isShowUser, setShowUser] = useState("");
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

      <ListHeader
        setShowUser={setShowUser}
        listType="Customer List"
        link={<Link to="/customerViewAll">View All</Link>}
      />
      <CustomerListTable2 />
    </div>
  );
};

export default Customer;
