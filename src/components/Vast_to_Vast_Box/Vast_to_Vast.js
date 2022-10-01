import React, { useState } from "react";
import { vast_to_vast } from "../../assets/Data";
import "./index.css";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import Vast_to_Vast_Popup from "../Vast_to_Vast_Popup/Vast_to_Vast_Popup";
import { useSelector } from "react-redux";

const Vast_to_Vast = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  const vasttovastcharges = useSelector((state) => state.vastchargesdata.vastChargesData);
  return (
    <div className="Vast-to-vast">
      {vast_to_vast.map((item, index) => {
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
                <h3 className="rate1">{vasttovastcharges.vastToVastCharges}</h3>
              </div>
              <div onClick={handleclick}>
                <button className="rate-box">
                  <img src={editicon} alt="edit-rate-icon" />
                  {item.edit}
                </button>
              </div>
            </div>
            {modalShow && <Vast_to_Vast_Popup closeModal={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Vast_to_Vast;
