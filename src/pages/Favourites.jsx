import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites) {
        return (
        <div className="favourites">
            <h2>Your favourite movies</h2>
          <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
          </div>
        </div>
      );
    }
    return <div className="favourites-empty">
        <h2>No  Favourite Movies Yet</h2>
        <p>Add movies to favourites in order for them to appear here</p>
    </div>
}

export default Favourite