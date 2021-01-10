import { getPosterImageUrl } from "requests/getTmdbEndpointUrls";
import getProfilePlaceholder from "utils/getProfilePlaceholder";
import getGenderText from "utils/getGenderText";

const extractPersonDetails = (person) => ({
  id: person.id,
  job: person.job || "Unknown",
  name: person.name || "Unknown",
  birthday: person.birthday || "",
  deathday: person.deathday || "",
  biography: person.biography || "",
  character: person.character || "Unknown",
  placeOfBirth: person.place_of_birth || "",
  department: person.known_for_department || "",
  gender: getGenderText(person.gender),
  posterImage:
    (person.profile_path && getPosterImageUrl(person.profile_path)) ||
    getProfilePlaceholder(person.profile_path),
});

export default extractPersonDetails;
