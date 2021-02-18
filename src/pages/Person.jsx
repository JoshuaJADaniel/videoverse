import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import getPerson from "requests/getPerson";
import getGeneric from "requests/getGeneric";

import resolveLoading from "utils/resolveLoading";
import extractMediaDetails from "utils/extractMediaDetails";

import Spacer from "components/Spacer";
import SectionBio from "components/SectionBio";
import SectionMedia from "components/SectionMedia";

import Template from "templates/Template";

const Person = () => {
  const { personId } = useParams();
  const history = useHistory();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    getPerson(
      `/person/${personId}`,
      (data) => {
        setPersonDetails(data);
        resolveLoading(setLoading);
      },
      history
    );

    getGeneric(`/person/${personId}/combined_credits`, ({ cast, crew }) => {
      if (cast && crew) {
        let mediaDetails = crew
          .concat(cast)
          .map((media) => extractMediaDetails(media));

        // Filter since a person may be part of the cast and the crew.This
        // leads to duplicates (with respect to ID) causing issues since ID is
        // being used as a key prop. Note that movie & TV ID can match.
        const movieIdSet = new Set();
        const tvIdSet = new Set();
        mediaDetails = mediaDetails.filter(({ id, mediaType }) => {
          if (mediaType === "movie") {
            if (!movieIdSet.has(id)) {
              movieIdSet.add(id);
              return true;
            }
          } else {
            if (!tvIdSet.has(id)) {
              tvIdSet.add(id);
              return true;
            }
          }

          return false;
        });

        setCredits(mediaDetails);
      }
    });
  }, []);

  return (
    <Template loading={loading} page={""}>
      <Spacer />
      <SectionBio personData={personDetails} />
      <Spacer />
      <SectionMedia title="Known For" mediaData={credits} responsive />
    </Template>
  );
};

export default Person;
