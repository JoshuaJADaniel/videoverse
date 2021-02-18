import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import getMedia from "requests/getMedia";
import getPerson from "requests/getPerson";
import resolveLoading from "utils/resolveLoading";

import Hero from "components/Hero";
import Spacer from "components/Spacer";
import SectionMedia from "components/SectionMedia";
import SectionPeople from "components/SectionPeople";

import Template from "templates/Template";

const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const [trendingMedia, setTrendingMedia] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [popularKidsMovies, setPopularKidsMovies] = useState([]);

  const popularKidsMoviesMinDate = `${new Date().getFullYear() - 5}-01-01`;

  useEffect(() => {
    getMedia(
      "/trending/all/week",
      (data) => {
        // Makes sure to remove people mixed in with other media
        setTrendingMedia(data.filter((media) => media.mediaType !== "person"));
        resolveLoading(setLoading);
      },
      [],
      history
    );

    getMedia("/tv/popular", setPopularTvShows);
    getMedia("/movie/popular", setPopularMovies);
    getMedia("/discover/movie", setPopularKidsMovies, [
      `primary_release_date.gte=${popularKidsMoviesMinDate}`,
      "certification_country=US",
      "certification.lte=G",
      "with_genres=16",
    ]);

    getPerson("/trending/person/week", (data) => {
      setTrendingPeople(data.results || []);
    });
  }, []);

  return (
    <Template loading={loading} page={"Home"}>
      <Hero mediaData={trendingMedia.slice(0, 5)} multislide />
      <Spacer />
      <SectionMedia mediaData={trendingMedia} title="Trending" />
      <Spacer />
      <SectionMedia mediaData={popularMovies} title="Popular Movies" />
      <Spacer />
      <SectionMedia mediaData={popularTvShows} title="Popular TV Shows" />
      <Spacer />
      <SectionMedia mediaData={popularKidsMovies} title="Popular Kids Movies" />
      <Spacer />
      <SectionPeople peopleData={trendingPeople} title="Trending People" />
    </Template>
  );
};

export default Home;
