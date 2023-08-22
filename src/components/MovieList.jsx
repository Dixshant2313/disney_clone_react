/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { getMovieByGenreId } from "../services/GlobalApi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieList = async () => {
    const response = await getMovieByGenreId(genreId);
    setMovieList(response.data.results);
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-none py-5 px-3 gap-8"
      >
        {movieList.map((item, index) => (
          <React.Fragment key={index}>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block top-0 absolute right-0 ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[150px]"
        }`}
      />
    </div>
  );
}

export default MovieList;
