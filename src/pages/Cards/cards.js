import React from "react";
import Background from "../../components/Background/background";
import EachOverview from "../../components/EachOverview/eachoverview";
import CardsOverview from "../../components/CardsOverview/cardsoverview";
const cards = () => {
  return (
    <div>
                        <Background/>
      <EachOverview props="Cards" text="Cards Overview" />
      <CardsOverview />
    </div>
  );
};

export default cards;
