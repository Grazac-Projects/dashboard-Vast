import React from "react";
import logo from "../../assets/vast.png";
import dashboard from "../../assets/Layer 2 (1).svg";
import transaction from "../../assets/Layer 2.svg";
import customers from "../../assets/Group (1).svg";
import cards from "../../assets/card.svg";
import analytics from "../../assets/Chart.svg";
import { NavLink } from "react-router-dom";
import "./index.css";
const index = ({ children }) => {
  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: dashboard,
    },
    {
      path: "/transaction",
      name: "Transactions",
      icon: transaction,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: customers,
    },
    {
      path: "/cards",
      name: "Cards",
      icon: cards,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: analytics,
    },
  ];
  return (
    <div className="container">
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="vast_logo" />
      </div>

      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeclassname="active"
        >
            <img className="link_icon" src={item.icon} alt="icons" />{" "}
            <div className="link_text">{item.name}</div>
        </NavLink>
      ))} 
    </div>
      <main>{children}

      </main>
    </div>
  );
};

export default index;
