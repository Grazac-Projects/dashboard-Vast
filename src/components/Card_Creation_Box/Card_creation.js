import React, { useState } from "react";
import { card_creation } from "../../assets/Data";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import './style.css'
import Card_Creation_Popup  from "../Card_Creation_Popup/Cardcreationpopup";
import { useSelector } from "react-redux";

const Card_creation = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  const creationcharges = useSelector((state) => state.vastchargesdata.vastChargesData);
  return (
    <div className="card_creation11">
      {card_creation.map((item, index) => {
        return (
          <div
            className="TransactionTypes-card"
            style={{
              backgroundColor: item.bgColor,
              backgroundImage: `url(${item.pattern})`,
            }}
          >
            <div className="padding">
              <div>
                <p className="title12">{item.title}</p>
                <h3 className="rate1">{creationcharges.cardCreationCharges}</h3>
              </div>
              <div onClick={handleclick}>
                <button className="rate-box">
                  <img src={editicon} alt="edit-rate-icon" />
                  {item.edit}
                </button>
              </div>
            </div>
            {modalShow && <Card_Creation_Popup closeModal={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Card_creation;
