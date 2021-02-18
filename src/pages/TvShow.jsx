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

const TvShow = () => {
  const { tvId } = useParams();
  const history = useHistory();
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState(true);
  const [castDetails, setCastDetails] = useState([]);
  const [crewDetails, setCrewDetails] = useState([]);
  const [tvShowDetails, setTvShowDetails] = useState({});
  const [relatedTvShows, setRelatedTvShows] = useState([]);

  useEffect(() => {
    getMedia(
      `/tv/${tvId}`,
      (data) => {
        setTvShowDetails(data);
        resolveLoading(setLoading);
      },
      [],
      history,
      null
    );

    getPerson(`/tv/${tvId}/credits`, ({ cast, crew }) => {
      if (cast) {
        setCastDetails(cast);
      }

      if (crew) {
        setCrewDetails(crew);
      }
    });

    getMedia(`/tv/${tvId}/recommendations`, setRelatedTvShows);
    getMediaTrailer(`/tv/${tvId}/videos`, setTrailer);
  }, []);

  return (
    <Template loading={loading} page={"TV Shows"}>
      <Hero mediaData={tvShowDetails} />
      <Spacer />
      <SectionOverview mediaData={tvShowDetails} trailer={trailer} />
      {trailer && <Spacer space={50} />}
      <Spacer />
      <SectionPeople title="Cast" badge="Cast" peopleData={castDetails} />
      <Spacer />
      <SectionPeople title="Crew" badge="Crew" peopleData={crewDetails} />
      <Spacer />
      <SectionMedia title="Related TV Shows" mediaData={relatedTvShows} />
    </Template>
  );
};

export default TvShow;
