import getRandomColor from "./getRandomColor";

const getRandomBackdrop = (text) =>
  `https://dummyimage.com/185x278/${getRandomColor()}/fff&text=${text ?? ''}`;

export default getRandomBackdrop;
