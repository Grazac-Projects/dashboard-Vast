import { Api } from "./AxiosInstance";

export const getvastcharges = async () => {
  try {
    const {
      data: {
        data: { charges },
      },
    } = await Api.get("/v1/admin/get-vast-charges");
    return charges;
  } catch (error) {
    return false;
  }
};
