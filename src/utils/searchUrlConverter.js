const separatingCharacter = "+";

const encodeSearch = (search) =>
  encodeURIComponent(search).replace(/%20/g, separatingCharacter);

const decodeSearch = (search) =>
  decodeURIComponent(search.replace(separatingCharacter, "%20"));

export { encodeSearch, decodeSearch };
