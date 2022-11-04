import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/file/filesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
  },
});
