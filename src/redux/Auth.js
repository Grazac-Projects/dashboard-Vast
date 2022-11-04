import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // accessToken: 'eyJ0eXAiOiJV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZGVsZXlldmljdG9yNDBAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHBzOi8vdmFzdC1hcHAuaGVyb2t1YXBwLmNvbS9hcGkvbG9naW4iLCJleHAiOjE2NjUxNDc1MDl9.fk5xcirU0B3I2j40fsohJh3aiOasrSWFCP1DtARpvJ0',
  accessToken:''
  
};

export const AuthData = createSlice({
  name: "authdata",
  initialState,
  reducers: {
    SaveAceccessToken: (state, action) => {
      state.accessToken=action.payload
    
    },
  },
});

// Action creators are generated for each case reducer function
export const { SaveAceccessToken } = AuthData.actions;

export default AuthData.reducer;
