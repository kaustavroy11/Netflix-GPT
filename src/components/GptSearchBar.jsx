import openai from "../utils/openai";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB API
  const searchMovie = async (content) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        content +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results;
  };

  // Search Tv Shows in TMDB API
  const searchTvShow = async (content) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/tv?query=" +
        content +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results;
  };

  const searchContent = async (content) => {
    const tvResults = await searchTvShow(content);

    if (tvResults && tvResults.length > 0) {
      return { type: "tv", results: tvResults };
    }
    const movieResults = await searchMovie(content);

    return { type: "movie", results: movieResults };
  };

  const handleGPTSearchClick = async () => {
    // Make an API Call to GPT API and get Results
    const gptQuery =
      "Act as a Movie/Tv Shows Recommendation system and suggest some Movies/Tv Shows or both as per the query: " +
      searchText.current.value +
      ". Only give me names of 5 Movies/Tv Shows, with comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don 2, Golmaal, Koi Mil Gaya. If the user's query is for Movies show the name of the movies, if it is for Tv Shows show the name of the Tv shows, and if neither Movies or Tv Shows is mentioned then show names for both Movies and Tv Shows";

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: gptQuery }],
      });

      const gptContent = gptResults.choices?.[0]?.message?.content.split(", ");

      // For each content search IMDB API
      // Data returns Promise
      const data = gptContent.map((content) => searchContent(content));
      const tmdbResults = await Promise.all(data);
    } catch (error) {
      if (error.response?.status === 429) {
        console.error("Rate limit exceeded. Try again later.");
      } else {
        console.error("GPT Error:", error);
      }
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
