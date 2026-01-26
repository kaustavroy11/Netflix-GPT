import { useDispatch } from "react-redux";
import { BG_IMG } from "../utils/constant";
import GptContentSuggestions from "./GptContentSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useEffect } from "react";
import { changeLanguage } from "../utils/store/slice/configSlice";

const GptSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(changeLanguage("en"));
    };
  }, [dispatch]);

  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pb-40">
        <GptSearchBar />
        <GptContentSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
