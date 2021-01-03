import React from "react";
import { useParams } from "react-router-dom";

const TvShow = () => {
  let { id } = useParams();

  return <h1>Tv Show: You requested Tv Show {id}</h1>;
};

export default TvShow;
