import React from "react";

const MovieButton = ({ imdbLink }) => {
  const handleClick = () => {
    window.open(imdbLink, "_blank"); // Opens the IMDb link in a new tab
  };

  return (
    <button className="link-button" onClick={handleClick}>
      TRAILER AND MORE INFO
    </button>
  );
};

export default MovieButton;
