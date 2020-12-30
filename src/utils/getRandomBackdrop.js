import getRandomColor from "./getRandomColor";

const getRandomBackdrop = (text) =>
  `https://dummyimage.com/1280x720/${getRandomColor()}/fff&text=${text ?? ""}`;

export default getRandomBackdrop;
