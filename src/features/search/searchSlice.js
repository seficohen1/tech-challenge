import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resultsByTitle: [],
  resultsByTag: [],
  resultsByUser: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getAllResults: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
      prepare(results) {
        return {
          payload: {
            resultsByTitle: [results.resultsByTitle],
            resultsByTag: [results.resultsByTag],
            resultsByUser: [results.resultsByUser],
          },
        };
      },
    },
  },
});

export const selectResultsByTitle = (state) => state.search.resultsByTitle;
export const selectResultsByTag = (state) => state.search.resultsByTag;
export const selectCurrentUser = (state) => state.search.resultsByUser;
export const { getAllResults } = searchSlice.actions;
export default searchSlice.reducer;
