
import React from "react";

function MovieDisplay(props) {
  const loaded = () => {
    return (
      <div>
        <h1>{props.currentMovie.Title}</h1>
        <h2>{props.currentMovie.Genre}</h2>
        <img src={props.currentMovie.Poster} alt={props.currentMovie.Title} />
        <h2>{props.currentMovie.Year}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Buffering...</h1>
  };

  return props.currentMovie ? loaded() : loading();
}

export default MovieDisplay;