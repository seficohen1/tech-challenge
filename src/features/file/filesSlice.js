import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allFiles: [],
  selectedFile: {},
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    getAllFiles: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
    },
    setSelectedFile: {
      reducer(state, { payload }) {
        return {
          ...state,
          selectedFile: {
            fileUrl: payload.fileUrl,
            title: payload.title,
            tag: payload.tag,
            user: payload.user,
          },
        };
      },
    },
  },
});

export const selectAllFiles = (state) => state.files.allFiles;
export const selectCurrentFile = (state) => state.files.selectedFile;
export const { getAllFiles, setSelectedFile } = filesSlice.actions;
export default filesSlice.reducer;
