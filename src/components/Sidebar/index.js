import React from "react";
import logo from "../../assets/logo.png";
import dashboard from "../../assets/Layer 2 (1).svg";
import transaction from "../../assets/Layer 2.svg";
import customers from "../../assets/Group (1).svg";
import cards from "../../assets/card.svg";
import analytics from "../../assets/Chart.svg";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import "./index.css";
import { Logout } from "../../api/Auth";
const Index = ({ children }) => {
  const logoutHandler = async () => {
    let { success } = await Logout();
    if (success == true) {
      localStorage.removeItem("token");
      window.location.reload(false);
    }
  };

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
    // {
    //   path: "/customerdetails",
    //   name: "customerDetails",

    // },
  ];
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='logo'>
          <img src={logo} alt='vast_logo' />
        </div>

        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassname='active'
          >
            {item.icon ? (
              <img className='link_icon' src={item.icon} alt='icons' />
            ) : (
              ""
            )}
            <div className='link_text'>{item.name}</div>
          </NavLink>
        ))}
        <p className='logoutlink link' onClick={logoutHandler}>
          <AiOutlineLogout />
          Logout
        </p>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Index;
