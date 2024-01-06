import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  userDetails:null
};
const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userDetails = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser:(state)=>{
      state.userDetails=null
      state.isAuthenticated=false
    }
  }
});

export const { login,logoutUser } = AuthReducer.actions;

export default AuthReducer.reducer;