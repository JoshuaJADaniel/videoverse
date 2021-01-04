import { getMovieBackdropUrl } from "../requests/getTmdbEndpointUrls";

const extractMovieDetails = (movieObject) => {
  let movieDetails = {
    title: movieObject.title,
    tagline: movieObject.tagline,
    overview: movieObject.overview,

    year: movieObject.release_date,
    rating: movieObject.vote_average,
    runtime: `${movieObject.runtime} mins`,
    genres: movieObject.genres.map((item) => item.name),

    backdropPath: movieObject.backdrop_path,
    backdropUrl: getMovieBackdropUrl(movieObject.backdrop_path),
  };

  movieDetails.genresText = movieDetails.genres.join(" | ");

  return movieDetails;
};

export default extractMovieDetails;
