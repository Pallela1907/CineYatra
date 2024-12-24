import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/MovieList.css";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
  
    useEffect(() => {
      axios.get(`http://localhost:5000/movies`)
        .then((response) => {
          setMovies(response.data);
          setFilteredMovies(response.data);
        })
        .catch((error) => console.log("Error fetching movies:", error));
    }, []);
    if (!movies) return <div>Loading...</div>;
  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
     <div>
       <div className="flex">
       <div className="position-center">CineYatra</div>
        </div> 
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movies/:${movie.id}`}>
            <div className="movie-card">
              <h3>{movie.title}</h3>
              <h4>{movie.genre}</h4>
              <p>{movie.description}</p>
              <h2>IMDB Rating: {movie.imdbRating}/10</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
