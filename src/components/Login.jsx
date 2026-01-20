import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-3/12 absolute z-10 p-12 bg-black/80  my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700/90 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700/90 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700/90 w-full"
        />
        <button className="p-4 my-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
