import { getMovieBackdropUrl } from "../requests/getTmdbEndpointUrls";

const extractMovieDetails = (movieObject) => {
  return {
    title: movieObject.title,
    tagline: movieObject.tagline,
    overview: movieObject.overview,

    year: movieObject.release_date,
    rating: movieObject.vote_average,
    runtime: movieObject.runtime,
    genres: movieObject.genres.map((item) => item.name),

    backdropPath: movieObject.backdrop_path,
    backdropUrl: getMovieBackdropUrl(movieObject.backdrop_path),
  };
};

export default extractMovieDetails;
