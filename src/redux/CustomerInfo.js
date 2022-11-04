import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  customerInfo:'',
  
};

export const customerinfo = createSlice({
  name: "customerinformation",
  initialState,
  reducers: {
    customerinfoData: (state, action) => {
      state.customerInfo=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { customerinfoData } = customerinfo.actions;

export default customerinfo.reducer;
