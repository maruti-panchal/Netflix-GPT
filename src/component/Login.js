import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = validate(email.current.value, password.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);
    console.log(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src="/img/bg.jpg"></img>
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix ? Sign Up Now"
            : "Already Registered ? Sing In  "}
        </p>
      </form>
    </div>
  );
};

export default Login;
