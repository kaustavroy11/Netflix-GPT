import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    contentResults: null,
    contentNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptContentResult: (state, action) => {
      const { contentNames, contentResults } = action.payload;
      state.contentNames = contentNames;
      state.contentResults = contentResults;
    },
    clearGptContentResult: (state) => {
      state.contentNames = null;
      state.contentResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptContentResult,
  clearGptContentResult,
} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
