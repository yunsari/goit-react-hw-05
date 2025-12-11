import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmE4OTcxNmVhZDJhZDVlYWI4YTBmNDY0YTk0NDgzMiIsIm5iZiI6MTc2MDcwOTIxNi44MDgsInN1YiI6IjY4ZjI0YTYwODc5Y2ZiNjM1ODBlNDg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5pxUWoD0oeICIXKzAIa_uo_4i3p1yiAgz_WBywmit4w";

const options = {
  headers: {
    accept: "application/json",
    Authorization: AUTH,
  },
};

export const fetchSearchMovie = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: {
      query,
      page,
      include_adult: false,
    },
  });

  return res.data.results;
};

export const fetchTrending = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}?language=en-US`,
    options
  );
  return res.data;
};

export const fetchMovieCast = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/credits?language=en-US`,
    options
  );
  return res.data;
};

export const fetchMovieReviews = async (id) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?language=en-US`,
    options
  );
  return res.data;
};
