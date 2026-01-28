import { useSelector } from "react-redux";
import useCurrentTvShows from "../hooks/useCurrentTvShows";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvShows from "../hooks/usePopularTvShows";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTvShows from "../hooks/useTopRatedTvShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTvShows from "../hooks/useTrendingTvShows";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useCurrentTvShows();
  useTrendingTvShows();
  useTopRatedTvShows();
  usePopularTvShows();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow">
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
