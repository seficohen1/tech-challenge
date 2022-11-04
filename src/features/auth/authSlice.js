import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
      prepare(user) {
        return {
          payload: {
            isLoggedIn: user.isLoggedIn,
            username: user.username,
          },
        };
      },
    },
    login: (state) => {
      state.username = 'danny';
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
