import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import styles from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error("API Error:", err);
      }
    }

    loadDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main className={styles["details-container"]}>
      <Link to="/" className={styles["back-btn"]}>
        ← Back
      </Link>

      <div className={styles["details-card"]}>
        <img
          className={styles["details-poster"]}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : "https://via.placeholder.com/400x600?text=No+Image"
          }
          alt={movie.title}
        />

        <div className={styles["details-info"]}>
          <h1>{movie.title}</h1>
          <p className={styles.score}>⭐ {movie.vote_average?.toFixed(1)}</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <ul className={styles["genre-list"]}>
            {movie.genres?.map((g) => (
              <li key={g.id}>{g.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles["additional-box"]}>
        <h2>Additional Information</h2>

        <ul className={styles["additional-list"]}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </main>
  );
}
