import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-10]">
        <img
          className="w-full h-full object-cover"
          src="./img/bg.jpg"
          alt="logo"
        />
      </div>
      <div className="relative">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
