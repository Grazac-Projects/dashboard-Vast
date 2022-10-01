import React, { useState } from "react";
import { card_to_wallet } from "../../assets/Data";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import EditRateComponent from "../EditRateComponent";
import Card_to_Wallet_Popup from "../Card_to_Wallet_Popup/Card_to_Wallet_Popup";
const Card_to_wallet = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  return (
    <div>
      {card_to_wallet.map((item, index) => {
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
              <h3 className="rate1">{item.rate}</h3>
            </div>
            <div onClick={handleclick}>
              <button className="rate-box">
                <img src={editicon} alt="edit-rate-icon" />
                {item.edit}
              </button>
            </div>
            </div>
            {modalShow && <Card_to_Wallet_Popup closeModal ={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Card_to_wallet;
