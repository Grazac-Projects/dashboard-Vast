import React, { useState } from "react";
import logo1 from "../../assets/logoblue.png";
import Button from "../../components/Button/button";
import "./login.css";
import PropTypes from "prop-types";
// import axios from "../../api/axios";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/layout";
import axios from "axios";
// import { Navigate } from "react-router-dom";
// import DashboardCardComponent from "../../components/DashboardCardComponent";
import Dashboard from "../Dashboard/dashboard";
import useToken from "../../components/useToken";
import { Loginauth } from "../../api/Auth";
import { BsWindowSidebar } from "react-icons/bs";

// localStorage.setItem('items', JSON.stringify(items));
// const setUserToken=(param)=>{
//     localStorage.setItem('token', param)
// }
// async function loginUser(credentials) {
//   try {
//     const plenty = await axios.post(
//       "https://vast-app.herokuapp.com/api/login",
//       {
//         withCredentials: true,
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (e) {
//     console.log(e, "this is the error");
//   }
// }

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    let data = await Loginauth(username, password);
   
    if (data.data.access_token) {
      localStorage.setItem("token", data.data.access_token);
      window.location.reload();
    } else {
      console.log("invalid login details");
    }
  };

  return (
    <div className='login'>
      <img className='logo' src={logo1} alt='' />
      <h1>Login to Admin Dashboard</h1>
      <form onSubmit={submit}>
        <div className='label'>
          <p>Email Address</p>
          <br />
          <input
            type='email'
            placeholder='Enter Autorized Email Address'
            required
            autoComplete='on'
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
        </div>
        <div className='label'>
          <p>Password</p>
          <br />
          <input
            className='label3'
            type='password'
            autoComplete='on'
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Button link={<Link to='/Side'></Link>} />
        </div>
      </form>
      <Layout />
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
