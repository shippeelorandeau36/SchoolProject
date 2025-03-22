function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function createRandomImage() {
  const image = { width: 100, height: 50 };
  const backgroundColor = "rgba(255, 255, 255, 0.6)";
  
  const svgPath = `
    <svg width="${image.width}" height="${image.height}">
      <circle cx="50" cy="50" r="40" fill="${backgroundColor}" />
    </svg>
  `;

  return svgPath;
}

function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
