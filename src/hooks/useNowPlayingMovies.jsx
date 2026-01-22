import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/store/slice/moviesSlice";
import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and Update Store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
