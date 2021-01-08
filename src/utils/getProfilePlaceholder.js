import manPlaceholder from "images/profile-man.png";
import womanPlaceholder from "images/profile-woman.png";
import manPlaceholderHighRes from "images/profile-man-high-res.png";
import womanPlaceholderHighRes from "images/profile-woman-high-res.png";

const isWoman = 1;
const isMan = 2;

const getProfilePlaceholder = (gender, highRes) => {
  switch (gender) {
    case isWoman:
      return highRes ? womanPlaceholderHighRes : womanPlaceholder;
    case isMan:
      return highRes ? manPlaceholderHighRes : manPlaceholder;
  }

  return highRes ? manPlaceholderHighRes : manPlaceholder;
};

export default getProfilePlaceholder;
