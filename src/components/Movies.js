import React from "react";

import Movie from "./Movie";

const Movies = ({ movieData }) => {
  return (
    <div>
      {movieData.map(movie => (
        <Movie {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;
