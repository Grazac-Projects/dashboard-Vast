import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
//   setnewRateData:'',
  
};

export const setnewRate = createSlice({
  name: "newRate",
  initialState,
  reducers: {
    formControl:(state)=>{
        
    }
  },
});

// Action creators are generated for each case reducer function
export const { ttt } = setnewRate.actions;

export default setnewRate.reducer;
