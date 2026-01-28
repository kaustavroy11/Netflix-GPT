import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addPopularTvShows } from "../utils/store/slice/tvShowsSlice";

const usePopularTvShows = () => {
  // Fetch Data from TMDB API and Update Store
  const dispatch = useDispatch();

  const popularTvShows = useSelector((store) => store.tvShows.popularTvShows);

  const getPopularTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularTvShows(json.results));
  };

  useEffect(() => {
    !popularTvShows && getPopularTvShows();
  }, []);
};

export default usePopularTvShows;
