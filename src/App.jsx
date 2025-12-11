import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./components/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews"));

function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
