import React, { useEffect } from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import DashboardCardComponent from "../../components/DashboardCardComponent";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import ListHeader from "../../components/ListHeader/ListHeader";

import { useDispatch } from "react-redux";
import { saveData } from "../../redux/admin-data";
import { getCardData } from "../../redux/vast-infoCards";
import {getmonowalletballance} from '../../redux/Mono-wallet'
// import {getCardsData} from '../Cards'

import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch();
 
  const getData = async () => {
   

    try {
      const plenty = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/users/count"
      );
      // console.log(plenty.data);
      console.log(plenty.data.userDetailsForAdmin);
      dispatch(saveData(plenty.data.userDetailsForAdmin));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

  const getTransactionvalues = async()=>{
    try{
      const dashvastinfo =await axios.get('https://vast-app.herokuapp.com/api/v1/admin/vast-info');
      
      // console.log(console.log(dashvastinfo.data.data.vastInfo))
      dispatch(getCardData(dashvastinfo.data.data.vastInfo));
    }catch(e){
      console.log(e, "this is the error");
    }
  }
 
  const getWalletBalance =async()=>{
    try{
        const getmono =await axios.get('https://vast-app.herokuapp.com/api/v1/admin/get-wallet?currency=NGN');
        
        const monocurrency = getmono.data.data.balance
       
        const finalvariable = '₦' + monocurrency ;
        
        dispatch(getmonowalletballance(finalvariable));
    }catch(e){
      console.log(e, "this is the error" )
    }
  }
 
  useEffect(() => {
    getData();
    getTransactionvalues();
    getWalletBalance();
   
    
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
      <Table />
     
    </div>
  );
};

export default Dashboard;
