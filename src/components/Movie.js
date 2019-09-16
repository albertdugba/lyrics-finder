import React from "react";

const Movie = ({ title, original_language, overview, released_date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>Released on {released_date}</p>
    </div>
  );
};

export default Movie;
