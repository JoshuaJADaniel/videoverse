import { string, number, arrayOf, exact } from "prop-types";

const mediaPropTypes = exact({
  // Common to movies and TV shows
  id: number.isRequired,
  status: string.isRequired,
  tagline: string.isRequired,
  overview: string.isRequired,
  originalLanguage: string.isRequired,
  mediaType: string.isRequired,
  rating: number.isRequired,
  title: string.isRequired,
  releaseDate: string.isRequired,
  genres: arrayOf(string).isRequired,
  runtime: string.isRequired,
  posterImage: string.isRequired,
  posterImageHighRes: string.isRequired,
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

export { mediaPropTypes };
