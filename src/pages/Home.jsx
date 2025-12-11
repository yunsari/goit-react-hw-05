import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "../api";

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

export default Home;
