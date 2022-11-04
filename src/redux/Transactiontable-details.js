import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  transactionData:'',
  
};

export const TransactionTable = createSlice({
  name: "transactiontable",
  initialState,
  reducers: {
    transactionDetails: (state, action) => {
     
      state.transactionData = action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { transactionDetails } = TransactionTable.actions;

export default TransactionTable.reducer;
