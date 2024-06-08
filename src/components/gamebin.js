export const gameBin = (src, alt) => {
  const container = document.createElement('div');
  const image = document.createElement('img');
  container.appendChild(image);

  image.src = src;
  image.alt = alt;

  return container;
};
