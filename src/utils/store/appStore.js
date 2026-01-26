import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
import tvShowsReducer from "./slice/tvShowsSlice";
import gptSearchReducer from "./slice/gptSearchSlice";
import configReducer from "./slice/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    gptSearch: gptSearchReducer,
    config: configReducer,
  },
});

export default appStore;
