import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieButton from "./MovieButton";
import "../styles/MovieDetails.css";
import BackButton from "./BackButton";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
       <BackButton />
      <h2>{movie.title}</h2>
      <h3>IMDB Rating: {movie.imdbRating}</h3>
      <h3>Genre: {movie.genre}</h3>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Brief: {movie.brief}</p>
      <MovieButton imdbLink ={movie.imdbLink} />
    </div>
  );
};

export default MovieDetails;
