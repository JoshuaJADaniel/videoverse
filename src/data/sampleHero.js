import getRandomBackdrop from "../utils/getRandomBackdrop";

const sampleHero = [...Array(5)].map(() => getRandomBackdrop());

export default sampleHero;
