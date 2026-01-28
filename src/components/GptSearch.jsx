import { useDispatch } from "react-redux";
import { BG_IMG } from "../utils/constant";
import GptContentSuggestions from "./GptContentSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useEffect } from "react";
import { changeLanguage } from "../utils/store/slice/configSlice";
import { clearGptContentResult } from "../utils/store/slice/gptSearchSlice";

const GptSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(changeLanguage("en"));
      dispatch(clearGptContentResult());
    };
  }, [dispatch]);

  return (
    <>
      <div className="fixed -z-10 brightness-65">
        <img
          src={BG_IMG}
          alt="background-img"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="pb-25 md:pb-50">
        <GptSearchBar />
        <GptContentSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
