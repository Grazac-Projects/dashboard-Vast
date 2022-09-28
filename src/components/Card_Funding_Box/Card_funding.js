import React, { useState } from "react";
import { card_funding } from "../../assets/Data";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import CardFunding_Popup from "../CardFunding_Popup/CardFunding_Popup";
import { useSelector } from "react-redux";
const Card_funding = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  const cardfundingcharges = useSelector((state) => state.vastchargesdata.vastChargesData);
  return (
    <div>
      {card_funding.map((item, index) => {
        return (
          <div
            className="TransactionTypes-card"
            style={{
              backgroundColor: item.bgColor,
              backgroundImage: `url(${item.pattern})`,
            }}
          >
            <div>
              <p className="title12">{item.title}</p>
              <h3 className="rate1">{cardfundingcharges.cardFundingCharges}</h3>
            </div>
            <div onClick={handleclick}>
              <button className="rate-box">
                <img src={editicon} alt="edit-rate-icon" />
                {item.edit}
              </button>
            </div>
            {modalShow && <CardFunding_Popup closeModal ={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Card_funding;
