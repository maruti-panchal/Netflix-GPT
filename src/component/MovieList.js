import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const movieListRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const container = movieListRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 relative">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="relative">
        <div ref={movieListRef} className="flex pb-4 overflow-x-hidden">
          {movies?.map((movie) => (
            <div key={movie.id} className="flex-none mx-2">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          onClick={() => handleScroll(-200)}
        >
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
          onClick={() => handleScroll(200)}
        >
          {/* Right arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;

// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   return (
//     <div className="px-6 ">
//       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
//       <div className="flex overflow-x-scroll">
//         <div className="flex">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MovieList;
