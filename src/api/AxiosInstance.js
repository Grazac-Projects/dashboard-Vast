import axios from "axios";

const Api = axios.create({
  baseURL: "https://vast-app.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
  },
});
const ApiWithoutToken = axios.create({
  baseURL: "https://vast-app.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
  },
});

Api.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(Error);
  }
);
ApiWithoutToken.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(Error);
  }
);
export { ApiWithoutToken, Api };
