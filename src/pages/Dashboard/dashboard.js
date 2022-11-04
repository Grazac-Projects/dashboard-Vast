import React, { useEffect, useState } from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import ListHeader from "../../components/ListHeader/ListHeader";
import { useDispatch } from "react-redux";
import { saveData } from "../../redux/admin-data";
import { getCardData } from "../../redux/vast-infoCards";
import { getmonowalletballance } from "../../redux/Mono-wallet";
import { getUserCount, getVastInfo, getWallet } from "../../api/Dashboard";
import { getTransactionHistory } from "../../api/Transactiondetails";


const Dashboard = () => {

  const [trasaction, setTransaction] = useState(false) 
  useEffect(() => {
    (async () => {
     let data = await getTransactionHistory()
     setTransaction(data);
    })();

  },[])




  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      dispatch(saveData(await getUserCount()));
      dispatch(getCardData(await getVastInfo()));
      dispatch(getmonowalletballance( "₦" + await getWallet()));
     
    
    })();

  });
  
  
  return (
    <div>
      <Background />

      <EachOverview props='Dashboard' text='Transaction Overview' />
      <DashboardCardComponent />

      <ListHeader
        listType='Transaction List'
        link={<Link to='/transactionViewAll'>View All</Link>}
      />
     {trasaction?  <Table data={trasaction}  />:'loading'}

    </div>
  );
};

export default Dashboard;
