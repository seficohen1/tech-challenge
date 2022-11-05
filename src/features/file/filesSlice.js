import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  fileUrl: '',
  title: '',
  tag: '',
  user: {},
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
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
      prepare({ id, fileUrl, title, tag, user }) {
        return {
          payload: {
            id,
            fileUrl,
            title,
            tag,
            user,
          },
        };
      },
    },
  },
});

export const selectCurrentFile = (state) => state.files;
export const { getAllFiles, setSelectedFile } = filesSlice.actions;
export default filesSlice.reducer;
