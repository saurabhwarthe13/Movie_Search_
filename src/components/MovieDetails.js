import React, { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import "./MovieDetails.css";

const API_URL = "https://www.omdbapi.com/?apikey=f2552bae";

function MovieDetails({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const { favorites, addFavorite } = useContext(FavoritesContext);

  // <<=== Add this useEffect here
  useEffect(() => {
    if (movie) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = "auto"; // Enable background scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [movie]);

  useEffect(() => {
    if (!movie) return;
    const fetchDetails = async () => {
      try {
        const res = await fetch(`${API_URL}&i=${movie.imdbID}&plot=full`);
        const data = await res.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchDetails();
  }, [movie]);

  if (!details) return <p>Loading details...</p>;

  const isFavorite = favorites.some((fav) => fav.imdbID === details.imdbID);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>
        <div className="modal-body">
          <img
            src={details.Poster !== "N/A" ? details.Poster : "/placeholder.png"}
            alt={details.Title}
          />
          <div className="movie-info">
            <h2>
              {details.Title} ({details.Year})
            </h2>
            <p>
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p>
              <strong>Actors:</strong> {details.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {details.Plot}
            </p>
            <p>
              <strong>IMDB Rating:</strong> ⭐ {details.imdbRating}
            </p>
            <button onClick={() => addFavorite(details)} disabled={isFavorite}>
              {isFavorite ? "⭐ Added to Favorites" : "⭐ Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
