import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../api";
import styles from "./Movies.module.css";

import MovieList from "../../components/MovieList/MovieList";

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

      <MovieList movies={movies} />
    </main>
  );
}

export default Movies;
