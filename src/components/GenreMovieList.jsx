import genre from "../constants/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return <div>
    {genre.map((item, index)=> index <= 4 && (
        <div key={item.id} className="p-4 md:p-8 px-8 md:px-16">
            <h2 className="text-[20px] font-bold text-white">{item.name}</h2>
            <MovieList genreId={item.id} index_={index}/>
        </div>
    ))}
    </div>;
}

export default GenreMovieList;
