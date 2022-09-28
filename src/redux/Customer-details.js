import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  CustomersdetailsData:'',
  
};

export const CustomerDetails = createSlice({
  name: "customerdetails",
  initialState,
  reducers: {
    savecustomerData: (state, action) => {
      state.CustomersdetailsData=action.payload
    
    },  
  },
});

// Action creators are generated for each case reducer function
export const { savecustomerData } = CustomerDetails.actions;

export default CustomerDetails.reducer;
