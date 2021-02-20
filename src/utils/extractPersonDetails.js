import { getPosterImageUrl } from "requests/getImageUrls";
import getProfilePlaceholder from "utils/getProfilePlaceholder";

const extractPersonDetails = (person) => ({
  id: person.id,
  job: person.job || "",
  name: person.name || "",
  birthday: person.birthday || "",
  deathday: person.deathday || "",
  biography: person.biography || "",
  character: person.character || "",
  placeOfBirth: person.place_of_birth || "",
  department: person.known_for_department || "",
  gender: ["Not Specified", "Female", "Male", "Non-Binary"][person.gender],
  posterImage:
    (person.profile_path && getPosterImageUrl(person.profile_path)) ||
    getProfilePlaceholder(person.gender),
});

export default extractPersonDetails;
