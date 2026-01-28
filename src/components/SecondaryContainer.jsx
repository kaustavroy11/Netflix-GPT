import { useSelector } from "react-redux";
import ContentList from "./ContentList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvShows = useSelector((store) => store.tvShows);

  return (
    movies && (
      <div className="bg-black min-h-screen w-screen">
        <div className="mt-0 md:-mt-46 pl-4 md:pl-12 relative z-20 flex flex-col gap-14 pb-36">
          <ContentList title={"Now Playing"} media={movies.nowPlayingMovies} />
          <ContentList
            title={"Trending Movies"}
            media={movies.trendingMovies}
          />
          <ContentList
            title={"Top Rated Movies"}
            media={movies.topRatedMovies}
          />
          <ContentList title={"Popular Movies"} media={movies.popularMovies} />
          <ContentList
            title={"TV Shows Currently Streaming"}
            media={tvShows.currentTvShows}
          />
          <ContentList
            title={"Trending TV Shows"}
            media={tvShows.trendingTvShows}
          />
          <ContentList
            title={"Top Rated TV Shows"}
            media={tvShows.topRatedTvShows}
          />
          <ContentList
            title={"Popular TV Shows"}
            media={tvShows.popularTvShows}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
