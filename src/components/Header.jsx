import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { addUser, removeUser } from "../utils/store/slice/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/store/slice/gptSearchSlice";
import { changeLanguage } from "../utils/store/slice/configSlice";
import lang from "../utils/languageConstant";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is Signed Out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubcribe when Component Unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black to-transparent z-10 flex flex-col md:flex-row justify-between items-center ">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex justify-center items-center p-2">
          {showGptSearch && (
            <select
              className="bg-gray-800 m-2 text-white w-25 p-2 rounded-md text-xs sm:text-sm md:text-base focus:outline-none"
              value={langKey}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-sm md:text-base py-2 px-4 mx-4 my-2 bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-200 hover:cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? lang[langKey].homepage : "GPT Search"}
          </button>
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                className="w-10 h-10 rounded-md"
                src={user?.photoURL}
                alt="usericon"
              />
              <IoMdArrowDropdown className="text-white text-xl md:text-2xl" />
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-gray-800/80 text-white rounded-md shadow-lg w-32">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-900 transition hover:outline-1 hover:outline-offset-2 hover:cursor-pointer"
                >
                  {showGptSearch ? lang[langKey].signOut : "Sign Out"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
