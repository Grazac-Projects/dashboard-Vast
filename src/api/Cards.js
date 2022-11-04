import { Api } from "./AxiosInstance";

export const vastinfo = async () => {
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

export const transactionuserCard = async () => {
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
