import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    currentTvShows: null,
    trendingTvShows: null,
    topRatedTvShows: null,
    popularTvShows: null,
  },
  reducers: {
    addCurrentTvShows: (state, action) => {
      state.currentTvShows = action.payload;
    },
    addTrendingTvShows: (state, action) => {
      state.trendingTvShows = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
  },
});

export const {
  addCurrentTvShows,
  addTrendingTvShows,
  addTopRatedTvShows,
  addPopularTvShows,
} = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
