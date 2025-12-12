import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await fetchMovieReviews(id);
        setReviews(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    loadReviews();
  }, [id]);

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}:</strong>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
