import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../api";
import styles from "./Movies.module.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchParams({ query });
  };

  useEffect(() => {
    async function loadMovies() {
      if (!query) return;

      const results = await fetchSearchMovie(query);
      setMovies(results);
    }
    loadMovies();
  }, [query]);

  return (
    <main>
      <h1 className={styles.title}>Search Movies</h1>

      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search Movie..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setSearchParams({ query: e.target.value })}
        />

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      <div className={styles.contentShows}>
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
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
    </main>
  );
}

export default Movies;
