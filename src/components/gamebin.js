export const gameBin = (src, alt, color) => {
  const container = document.createElement('div');
  const image = document.createElement('img');
  container.appendChild(image);
  container.className = `${color} bin`;
  image.src = src;
  image.alt = alt;
  image.width = 70;
  return container;
};
