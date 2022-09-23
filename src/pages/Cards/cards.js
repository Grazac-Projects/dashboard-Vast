import React from "react";
import Background from "../../components/Background/background";
import CustomerListTableComponent from "../../components/CustomerListTableComponent";
import EachOverview from "../../components/EachOverview/eachoverview";
import CardsOverview from "../../components/CardsOverview/Cardsoverview";
import ListHeader from "../../components/ListHeader/ListHeader";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCardData } from "../../redux/vast-infoCards";
import { useEffect } from "react";

import axios from "axios";



const Cards = () => {
  const dispatch = useDispatch();
 
  const getCardsData = async () => {
   

    try {
      const cardsinfo = await axios.get(
        "https://vast-app.herokuapp.com/api/v1/admin/vast-info"
      );
      // console.log(cardsinfo.data);
      // console.log(cardsinfo.data.data.vastInfo);
      // console.log(cardsinfo.data.data.vastInfo.totalCards)
      dispatch(getCardData(cardsinfo.data.data.vastInfo));
    } catch (e) {
      console.log(e, "this is the error");
    }
  };

 
  useEffect(() => {
    getCardsData();
    
  });
  
  return (
    <div>
      <Background />
      <EachOverview props="Cards" text="Cards Overview" />
      <CardsOverview />
      <ListHeader listType='Cards List' link= {<Link to="/cardViewAll" >View All</Link>}/>
      <CustomerListTableComponent />
    </div>
  );
};

export default Cards;
