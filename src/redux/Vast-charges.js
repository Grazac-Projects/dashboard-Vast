import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  vastChargesData:'',
  
};

export const vastchargesdata = createSlice({
  name: "vastCharges",
  initialState,
  reducers: {
  getvastchargesData: (state, action) => {
      state.vastChargesData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { getvastchargesData } = vastchargesdata.actions;

export default vastchargesdata.reducer;
