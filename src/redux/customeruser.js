import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  customerData: "",
};

export const customeruser = createSlice({
  name: "customer",
  initialState,
  reducers: {
    savecustomercardData: (state, action) => {
      state.customerData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { savecustomercardData } = customeruser.actions;

export default customeruser.reducer;
