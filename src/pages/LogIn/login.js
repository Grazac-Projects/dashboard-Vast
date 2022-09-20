import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import logo1 from "../../assets/logoblue.png";
import Button from "../../components/Button/button";
import "./login.css";
import { Link } from "react-router-dom";
const login = ({ setUserToken }) => {
  return (
    <div className="login">
      <img className="logo" src={logo1} alt="" />
      <h1>Login to Admin Dashboard</h1>
      <form>
        <div className="label">
          <p>Email Address</p>
          <br />
          <input type="email" placeholder="Enter Autorized Email Address" />
          <br />
        </div>
        <div className="label">
          <p>Password</p>
          <br />
            <input className="label3" type="password" placeholder="Enter Password"/>
            {/* <AiOutlineEye /> */}
        </div>
        <div onClick={() => setUserToken(false)}>
          <Button link={<Link to="/Side"></Link>} />
        </div>
      </form>
    </div>
    // AiOutlineEyeInvisible
  );
};

export default login;
