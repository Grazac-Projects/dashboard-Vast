import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  loginData: "",
};

export const loginuser = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveloginuserData: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveloginuserData } = loginuser.actions;

export default loginuser.reducer;
