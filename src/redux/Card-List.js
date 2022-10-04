import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  cardTableData:'',
  
};

export const cardtableListData = createSlice({
  name: "monowallet",
  initialState,
  reducers: {
    getcardTablelistData: (state, action) => {
      state.cardTableData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { getcardTablelistData } = cardtableListData.actions;

export default cardtableListData.reducer;
