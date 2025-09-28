import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const API_URL = "https://www.omdbapi.com/?apikey=f2552bae";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    try {
      const res = await fetch(`${API_URL}&s=${searchTerm}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    }
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <MovieList movies={movies} onSelect={setSelectedMovie} />
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default Home;
