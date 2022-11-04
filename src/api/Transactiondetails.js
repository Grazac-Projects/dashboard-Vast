import { Api } from "./AxiosInstance";

export const getTransactionHistory = async () => {
  try {
    const response = await Api.get("/v1/history/all");
    console.log(response.data);
    return response.data;
    //   return vastInfo;
  } catch (error) {
    return false;
  }
};
