import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addCurrentTvShows } from "../utils/store/slice/tvShowsSlice";

const useCurrentTvShows = () => {
  // Fetch Data from TMDB API and Update Store
  const dispatch = useDispatch();

  const currentTvShows = useSelector((store) => store.tvShows.currentTvShows);

  const getCurrentTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addCurrentTvShows(json.results));
  };

  useEffect(() => {
    !currentTvShows && getCurrentTvShows();
  }, []);
};

export default useCurrentTvShows;
