import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  return <h1>Movie: You requested movie {id}</h1>;
};

export default Movie;
