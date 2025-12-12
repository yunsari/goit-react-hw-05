import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={styles.contentShows}>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
            />
            <div className={styles.titleBox}></div>
            <div className={styles.name}>{movie.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
