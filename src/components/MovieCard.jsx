/* eslint-disable react/prop-types */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        className="w-[110px] md:w-[230px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
      />
      <h2 className="w-[105px] md:w-[220px] text-white mt-2 text-[14px] md:text-[20px]">
        {movie.title}
      </h2>
    </section>
  );
}

export default MovieCard;
