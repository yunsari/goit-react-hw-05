import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";

import MovieList from "../../components/MovieList/MovieList";

import styles from "./Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTrending();
        setMovies(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadMovies();
  }, []);

  return (
    <main>
      <h1 className={styles.title}>Trending Today</h1>

      <MovieList movies={movies} />
    </main>
  );
}

export default Home;
