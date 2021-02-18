import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import getMedia from "requests/getMedia";
import getPerson from "requests/getPerson";
import getMediaTrailer from "requests/getMediaTrailer";

import resolveLoading from "utils/resolveLoading";

import Hero from "components/Hero";
import Spacer from "components/Spacer";
import SectionMedia from "components/SectionMedia";
import SectionPeople from "components/SectionPeople";
import SectionOverview from "components/SectionOverview";

import Template from "templates/Template";

const Movie = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getMedia(
      `/movie/${movieId}`,
      (data) => {
        setMovieDetails(data);
        resolveLoading(setLoading);
      },
      [],
      history,
      null
    );

    getPerson(`/movie/${movieId}/credits`, ({ cast, crew }) => {
      if (cast) {
        setCastDetails(cast);
      }

      if (crew) {
        setCrewDetails(crew);
      }
    });

    getMedia(`/movie/${movieId}/recommendations`, setRelatedMovies);
    getMediaTrailer(`/movie/${movieId}/videos`, setTrailer);
  }, []);

  return (
    <Template loading={loading} page={"Movies"}>
      <Hero mediaData={movieDetails} />
      <Spacer />
      <SectionOverview mediaData={movieDetails} trailer={trailer} />
      {trailer && <Spacer space={50} />}
      <Spacer />
      <SectionPeople title="Cast" badge="Cast" peopleData={castDetails} />
      <Spacer />
      <SectionPeople title="Crew" badge="Crew" peopleData={crewDetails} />
      <Spacer />
      <SectionMedia title="Related Movies" mediaData={relatedMovies} />
    </Template>
  );
};

export default Movie;
