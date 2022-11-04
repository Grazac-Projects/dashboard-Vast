import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getcustomercardInfo, getcustomerInfo } from "../../api/Customer";

import Background from "../../components/Background/background";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import CustomerListTable2 from "../../components/CustomerListTable2";
import Eachoverview from "../../components/EachOverview/eachoverview";

const CustomerInfo = () => {
  let params = useParams();
  // console.log(params);
  const [customerinfo, setCustomerInfo] = useState(false);
  const [customercardinfo, setCustomercardInfo] = useState(false);






   
  useEffect(() => {
    (async () => {
      let data = await getcustomerInfo(params.email);
      setCustomerInfo(data);
      let carddata = await getcustomercardInfo(params.id) 
      setCustomercardInfo(carddata);
    })();
  }, []);

  return (
    <div>
      <Background />
      <Eachoverview props='Cards' text='Cards Overview' />
      {customerinfo ? (
        <CustomerDetails customerinfo={customerinfo}  customercardinfo={customercardinfo} />
      ) : (
        "loading"
      )}

<CustomerListTable2 />
    </div>
  );
};

export default CustomerInfo;
