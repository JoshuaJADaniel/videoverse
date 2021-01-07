import manPlaceholder from "images/profile-man.png";
import womanPlaceholder from "images/profile-woman.png";

const isWoman = 1;
const isMan = 2;

const getProfilePlaceholder = (gender) => {
  switch (gender) {
    case isWoman:
      return womanPlaceholder;
    case isMan:
      return manPlaceholder;
  }

  return manPlaceholder;
};

export default getProfilePlaceholder;
