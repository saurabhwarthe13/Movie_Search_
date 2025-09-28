import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  if (!movies || movies.length === 0)
    return <p>No movies found. Try searching!</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={() => onSelect(movie)}
        />
      ))}
    </div>
  );
}

export default MovieList;
