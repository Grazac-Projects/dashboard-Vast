import React from "react";
import { useState, useRef, useEffect } from "react";
import logo1 from "../../assets/logoblue.png";
import Button from "../../components/Button/button";
import "./login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/layout";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const Login = ({ setUserToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const userToken = await loginUser({
      username,
      password
    });
    setUserToken(userToken);
  }
  return (
    <>
      {" "}
      <div className="login">
        <img className="logo" src={logo1} alt="" />
        <h1>Login to Admin Dashboard</h1>
        <form>
          <div className="label">
            <p>Email Address</p>
            <br />
            <input
              type="email"
              placeholder="Enter Autorized Email Address"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
          </div>
          <div className="label">
            <p>Password</p>
            <br />
            <input
              className="label3"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button link={<Link to="/Side"></Link>} />
          </div>
        </form>
      </div>{" "}
      <Layout />
    </>
  );
};
Login.propTypes = {
  setUserToken: PropTypes.func.isRequired,
};
export default Login;
