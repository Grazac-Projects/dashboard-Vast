import React from "react";
import Background from "../../components/Background/background";
import CustomerListTableComponent from "../../components/CustomerListTableComponent";
import EachOverview from "../../components/EachOverview/eachoverview";
import CardsOverview from "../../components/CardsOverview/cardsoverview";
import ListHeader from "../../components/ListHeader/ListHeader";
const cards = () => {
  return (
    <div>
      <Background />
      <EachOverview props="Cards" text="Cards Overview" />
      <CardsOverview />
      <ListHeader listType="Customers List" />
      <CustomerListTableComponent />
    </div>
  );
};

export default cards;
