import { getBackdropImageUrl } from "requests/getTmdbEndpointUrls";

const getRuntime = (runtimes) => {
  if (runtimes.length) {
    const maxRuntime = Math.max(...runtimes);
    const minRuntime = Math.min(...runtimes);

    return maxRuntime !== minRuntime
      ? `${minRuntime}-${maxRuntime} min`
      : `${minRuntime} min`;
  }

  return "";
};

const extractMediaDetails = (media) => {
  let mediaDetails = {
    // Common to movies and TV shows
    id: media.id,
    status: media.status,
    tagline: media.tagline,
    overview: media.overview,
    rating: media.vote_average,
    title: media.title || media.name,
    releaseDate: media.release_date || media.first_air_date,
    genres: media.genres.map((item) => item.name),
    runtime:
      (media.runtime && getRuntime([media.runtime])) ||
      (media.episode_run_time && getRuntime(media.episode_run_time)),
    imageUrl: media.backdrop_path && getBackdropImageUrl(media.backdrop_path),

    // Specific to movies
    budget: media.budget,
    revenue: media.revenue,

    // Specific to TV shows
    lastDate: media.last_air_date,
    creators: media.created_by,
    totalEpisodes: media.number_of_episodes,
    totalSeasons: media.number_of_seasons,
    seasons: media.seasons,
  };

  return mediaDetails;
};

export default extractMediaDetails;
