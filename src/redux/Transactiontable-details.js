import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  TransactionTableData:'',
  
};

export const TansactionTableDetailsdata = createSlice({
  name: "transactionTableDetails",
  initialState,
  reducers: {
  getTranstableData: (state, action) => {
      state.TransactionTableData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTranstableData } = TansactionTableDetailsdata.actions;

export default TansactionTableDetailsdata.reducer;
