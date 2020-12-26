
const randomColor = () => `${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;

const randomImg = (text) => `https://dummyimage.com/1280x720/${randomColor()}/fff&text=${text}`;

const sampleHero = []

for (let i = 0; i < 5; i++) {
  sampleHero.push(randomImg(i + 1));
}

export default sampleHero;
