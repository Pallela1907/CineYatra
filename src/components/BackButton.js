import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigates to the home route
  };

  return (
    <button className="link-button" onClick={handleClick}>
      BACK TO HOME
    </button>
  );
};

export default BackButton;
