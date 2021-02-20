import { getPosterImageUrl, getBackdropImageUrl } from "requests/getImageUrls";

import posterPlaceholder from "images/poster-placeholder.png";
import backdropPlaceholder from "images/backdrop-placeholder.png";

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

const extractMediaDetails = (media) => ({
  // Common to movies and TV shows
  id: media.id,
  status: media.status || "",
  tagline: media.tagline || "",
  overview: media.overview || "",
  language: media.original_language || "",
  mediaType: media.media_type || "",
  rating: media.vote_average || 0,
  title: media.title || media.name || "Unknown",
  releaseDate: media.release_date || media.first_air_date || "",
  genres: (media.genres && media.genres.map((item) => item.name)) || [],
  runtime:
    (media.runtime && getRuntime([media.runtime])) ||
    (media.episode_run_time && getRuntime(media.episode_run_time)) ||
    "",
  posterImage:
    (media.poster_path && getPosterImageUrl(media.poster_path)) ||
    posterPlaceholder,
  backdropImage:
    (media.backdrop_path && getBackdropImageUrl(media.backdrop_path)) ||
    backdropPlaceholder,

  // Specific to movies
  budget: media.budget || 0,
  revenue: media.revenue || 0,

  // Specific to TV shows
  lastDate: media.last_air_date || "",
  totalEpisodes: media.number_of_episodes || 0,
  totalSeasons: media.number_of_seasons || 0,
  creators: media.created_by || [],
  seasons: media.seasons || [],
});

export default extractMediaDetails;
