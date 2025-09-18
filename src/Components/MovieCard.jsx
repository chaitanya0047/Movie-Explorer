import React, { useState } from "react";
import "./MovieCard.css";

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
            src="./src/assets/Images/ImageNotFound.png"
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

      <p className="movie-title">{movie.Title}</p>
      <span className="year-badge">{movie.Year}</span>
    </div>
  );
};

export default MovieCard;