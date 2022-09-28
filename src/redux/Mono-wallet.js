import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  monobalanceData:'',
  
};

export const monowalletbalance = createSlice({
  name: "monowallet",
  initialState,
  reducers: {
    getmonowalletballance: (state, action) => {
      state.monobalanceData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { getmonowalletballance } = monowalletbalance.actions;

export default monowalletbalance.reducer;
