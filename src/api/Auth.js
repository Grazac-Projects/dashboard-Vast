// import axios from "axios";
import { useState } from "react";
import { ApiWithoutToken, Api } from "./AxiosInstance";

export const Logout = async () => {
  try {
    const { data } = await Api.get("logout");
    return data;
  } catch (error) {
    return false;
  }
};

export const Loginauth = async (username, password) => {
  try {
    return await ApiWithoutToken.post("login", { username, password });
  } catch (error) {
    return false;
  }
};
