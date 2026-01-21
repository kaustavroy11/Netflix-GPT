import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    // Validate the Form Data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignInForm ? null : fullName.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute z-10 p-12 bg-black/80  my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            autoComplete="name"
            className="p-4 my-4 bg-gray-700/90 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
          className="p-4 my-4 bg-gray-700/90 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete={isSignInForm ? "current-password" : "new-password"}
          className="p-4 my-4 bg-gray-700/90 w-full"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
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
