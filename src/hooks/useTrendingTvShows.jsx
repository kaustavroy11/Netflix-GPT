import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTrendingTvShows } from "../utils/store/slice/tvShowsSlice";

const useTrendingTvShows = () => {
  // Fetch Data from TMDB API and Update Store
  const dispatch = useDispatch();

  const getTrendingTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTrendingTvShows(json.results));
  };

  useEffect(() => {
    getTrendingTvShows();
  }, []);
};

export default useTrendingTvShows;
