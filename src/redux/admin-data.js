import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  dashboardData:'',
  
};

export const admindata = createSlice({
  name: "admin",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.dashboardData=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveData } = admindata.actions;

export default admindata.reducer;
