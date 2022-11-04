import { Api } from "./AxiosInstance";

export const getUserCount = async () => {
  try {
    const { data } = await Api.get("v1/admin/users/count");

    return data.userDetailsForAdmin;
  } catch (error) {
    return false;
  }
};
export const getVastInfo = async () => {
  try {
    const {
      data: {
        data: { vastInfo },
      },
    } = await Api.get("/v1/admin/vast-info");
    return vastInfo;
  } catch (error) {
    return false;
  }
};

export const getWallet = async () => {
  try {
    const {
      data: {
        data: { balance },
      },
    } = await Api.get("v1/admin/get-wallet?currency=NGN");
    return balance;
  } catch (error) {
    return false;
  }
};
