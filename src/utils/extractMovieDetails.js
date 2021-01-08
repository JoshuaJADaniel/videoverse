import { getMovieBackdropUrl } from "requests/getTmdbEndpointUrls";

const extractMovieDetails = (movieObject) => {
  let movieDetails = {
    title: movieObject.title,
    overview: movieObject.overview,

    year: movieObject.release_date,
    rating: movieObject.vote_average,
    runtime: movieObject.runtime && `${movieObject.runtime} mins`,
    genres: movieObject.genres.map((item) => item.name),

    imageUrl:
      (movieObject.backdrop_path &&
        getMovieBackdropUrl(movieObject.backdrop_path)) ||
      "",
  };

  movieDetails.genresText = movieDetails.genres.join(" | ");

  return movieDetails;
};

export default extractMovieDetails;
