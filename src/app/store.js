import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice';
import filesReducer from '../features/file/filesSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    files: filesReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
