import { Api } from "./AxiosInstance";

export const usersCount = async () => {
  try {
    const { data } = await Api.get("/v1/admin/users/count");

    return data.userDetailsForAdmin;
  } catch (e) {
    return false;
  }
};
export const usersdata = async () => {
  try {
    const { data } = await Api.get("v1/admin/users/data");

    return data.users;
  } catch (e) {
    return false;
  }
};

export const getcustomerInfo = async (email) => {
  try {
    const {
   
        data: { accountProfileDetails },
    
    } = await Api.get("/v1/admin/user-details?email="+email);
    return accountProfileDetails ;
  } catch (error) {
    return false;
  }
};



export const getcustomercardInfo = async (id) => {
  try {
    const { data } = await Api.get("/v1/admin/get-user-cards-statistics" + id);
    console.log(data);

    return data;
  } catch (e) {
    return false;
  }
};