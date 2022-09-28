import React, { useState } from "react";
import { account_top_up } from "../../assets/Data";
import "./../TransactionTypes/transactiontypes.css";
import editicon from "../../assets/Data/Vector.png";
import Account_topup_Popup from "../Account_topup_Popup/Account_topup_Popup";
import { useSelector } from "react-redux";
const Account_top_up = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleclick = () => {
    setModalShow(true);
  };
  const Accttopupcharges = useSelector((state) => state.vastchargesdata.vastChargesData);
  return (
    <div>
      {account_top_up.map((item, index) => {
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
              <h3 className="rate1">{Accttopupcharges.accountTopUpCharges}</h3>
            </div>
            <div onClick={handleclick}>
              <button className="rate-box">
                <img src={editicon} alt="edit-rate-icon" />
                {item.edit}
              </button>
            </div>
            {modalShow && <Account_topup_Popup closeModal ={setModalShow} />}
          </div>
        );
      })}
    </div>
  );
};

export default Account_top_up;
