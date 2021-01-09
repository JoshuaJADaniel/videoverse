const extractTrailerEmbedUrl = (data) => {
  for (let { site, type, key } of data) {
    if (site === "YouTube" && type === "Trailer") {
      return `https://www.youtube.com/embed/${key}`;
    }
  }

  return "";
};

export default extractTrailerEmbedUrl;
