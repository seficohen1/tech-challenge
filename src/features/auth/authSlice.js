import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { login } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth;
export default authSlice.reducer;
