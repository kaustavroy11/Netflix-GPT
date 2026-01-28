import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTopRatedTvShows } from "../utils/store/slice/tvShowsSlice";

const useTopRatedTvShows = () => {
  // Fetch Data from TMDB API and Update Store
  const dispatch = useDispatch();

  const topRatedTvShows = useSelector((store) => store.tvShows.topRatedTvShows);

  const getTopRatedTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedTvShows(json.results));
  };

  useEffect(() => {
    !topRatedTvShows && getTopRatedTvShows();
  }, []);
};

export default useTopRatedTvShows;
