import { string, number, arrayOf, exact } from "prop-types";

const mediaPropTypes = exact({
  // Common to movies and TV shows
  id: number.isRequired,
  status: string.isRequired,
  tagline: string.isRequired,
  overview: string.isRequired,
  language: string.isRequired,
  mediaType: string.isRequired,
  rating: number.isRequired,
  title: string.isRequired,
  releaseDate: string.isRequired,
  genres: arrayOf(string).isRequired,
  runtime: string.isRequired,
  posterImage: string.isRequired,
  backdropImage: string.isRequired,

  // Specific to movies
  budget: number.isRequired,
  revenue: number.isRequired,

  // Specific to TV shows
  lastDate: string.isRequired,
  totalEpisodes: number.isRequired,
  totalSeasons: number.isRequired,
  creators: arrayOf(string).isRequired,
  seasons: arrayOf(string).isRequired,
});

const personPropTypes = exact({
  id: number.isRequired,
  job: string.isRequired,
  name: string.isRequired,
  birthday: string.isRequired,
  deathday: string.isRequired,
  biography: string.isRequired,
  character: string.isRequired,
  placeOfBirth: string.isRequired,
  department: string.isRequired,
  gender: string.isRequired,
  posterImage: string.isRequired,
});

const selectPropTypes = exact({
  value: string.isRequired,
  label: string.isRequired,
});

export { mediaPropTypes, personPropTypes, selectPropTypes };
