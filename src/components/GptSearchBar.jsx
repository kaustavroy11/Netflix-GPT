import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptContentResult } from "../utils/store/slice/gptSearchSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  // Search Content from both the API
  const searchContent = async (content) => {
    const tvResults = await searchTvShow(content);

    if (tvResults && tvResults.length > 0) {
      return tvResults;
    }
    const movieResults = await searchMovie(content);

    return movieResults;
  };

  const handleGPTSearchClick = async () => {
    setLoading(true);

    // Make an API Call to GPT API and get Results
    const gptQuery =
      "Act as a smart Movie/TV Shows recommendation system and suggest relevant Movies/TV Shows based on the user query: " +
      searchText.current.value +
      ". Return exactly 5 names only. Format the response as comma-separated values with no extra text, explanations, numbering, or emojis. Example format: Gadar, Sholay, Don 2, Golmaal, Koi Mil Gaya. If the user's query is specifically about Movies, return only Movie names. If it is about TV Shows, return only TV Show names. If the query does not explicitly mention Movies or TV Shows, return a mix of both Movies and TV Shows.";

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: gptQuery }],
      });

      const gptContent = gptResults.choices?.[0]?.message?.content.split(", ");

      // For each content search IMDB API
      // Data returns Promise
      const promiseArray = gptContent.map((content) => searchContent(content));
      const tmdbResults = await Promise.all(promiseArray);
      setLoading(false);
      dispatch(
        addGptContentResult({
          contentNames: gptContent,
          contentResults: tmdbResults,
        }),
      );
    } catch (error) {
      if (error.response?.status === 429) {
        console.error("Rate limit exceeded. Try again later.");
      } else {
        console.error("GPT Error:", error);
      }
    }
  };

  return (
    <div>
      <div className="pt-[40%] md:pt-[10%] flex justify-center mb-5">
        <h2 className="text-lg sm:text-2xl md:text-4xl px-6 md:px-0 font-semibold text-gray-100 flex my-11">
          {lang[langKey].text}
        </h2>
      </div>

      <form
        className="grid grid-cols-12 gap-4 w-full md:w-1/2 px-5 md:p-0 mx-auto mb-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="placeholder:text-[9.5px] md:placeholder:text-base col-span-9 p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="col-span-3 p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
          onClick={handleGPTSearchClick}
        >
          {!loading && lang[langKey].search}
        </button>

        {loading && (
          <div className="col-span-12 flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 relative">
                <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-red-500 rounded-full animate-spin absolute top-0 left-0"></div>
                <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-transparent rounded-full animate-spin absolute top-0 left-0 animate-reverse"></div>
              </div>
              <div className="text-red-500 text-xl font-semibold">
                Loading...
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
