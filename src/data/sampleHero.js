import getRandomBackdrop from "../utils/getRandomBackdrop";

const sampleHero = [...Array(5)].map((_, idx) => getRandomBackdrop(idx + 1));

export default sampleHero;
