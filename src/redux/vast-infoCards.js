import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  vastcardinfoData:'',
  
};

export const vastInfocards = createSlice({
  name: "vastinfo",
  initialState,
  reducers: {
    getCardData: (state, action) => {
      state. vastcardinfoData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCardData } = vastInfocards.actions;

export default vastInfocards.reducer;
