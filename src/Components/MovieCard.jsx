import React, { useState } from "react";
import "./MovieCard.css";
import ImageNotFound from "../assets/Images/ImageNotFound.png";

const MovieCard = ({ movies }) => {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCardItem key={movie.imdbID} movie={movie} />
      ))}
    </section>
  );
};

const MovieCardItem = ({ movie }) => {
  const [hasError, setHasError] = useState(false);

  const showFallback = movie.Poster === "N/A" || hasError;

  return (
    <div className="grid-items">
      {showFallback ? (
        <div className="fallback-card">
          <img
            src={ImageNotFound}
            alt="Not Found"
            className="poster-not-found"
          />
          <p className="not-found-text">Poster Unavailable</p>
        </div>
      ) : (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="poster"
          onError={() => setHasError(true)}
        />
      )}

      <div className="movie-details">
        <p className="movie-title">
          {movie.Title.split(" ").slice(0, 5).join(" ")}
        </p>
        <span className="year-badge">{movie.Year?.slice(0, 4)}</span>
      </div>
    </div>
  );
};

export default MovieCard;
