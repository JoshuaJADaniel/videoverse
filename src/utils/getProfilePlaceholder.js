import manPlaceholder from "images/profile-man.png";
import womanPlaceholder from "images/profile-woman.png";

const getProfilePlaceholder = (isWoman) =>
  isWoman ? womanPlaceholder : manPlaceholder;

export default getProfilePlaceholder;
