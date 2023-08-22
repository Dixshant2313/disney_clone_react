import { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingmovies();
  }, []);

  const getTrendingmovies = async () => {
    const response = await getTrendingVideos;
    console.log(response);
    setMovieList(response.data.results);
  };

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 125;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 125;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" 
        onClick={() => slideLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => slideRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            key={index}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
