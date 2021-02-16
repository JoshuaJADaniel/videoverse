import { getPosterImageUrl } from "requests/getImageUrls";
import getProfilePlaceholder from "utils/getProfilePlaceholder";

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
  gender: ["Not Specified", "Female", "Male"][person.gender],
  posterImage:
    (person.profile_path && getPosterImageUrl(person.profile_path)) ||
    getProfilePlaceholder(person.gender),
  posterImageHighRes:
    (person.profile_path && getPosterImageUrl(person.profile_path, true)) ||
    getProfilePlaceholder(person.gender, true),
});

export default extractPersonDetails;
