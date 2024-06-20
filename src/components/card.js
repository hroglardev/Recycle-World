export const card = (src, alt, targetBin, itemName) => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  container.appendChild(image);
  container.className = `${targetBin} carousel-item`;
  container.id = itemName;
  image.src = src;
  image.alt = alt;
  image.className = 'd-block w-100';
  image.loading = 'lazy';
  image.width = 167;
  image.height = 167;

  return container;
};
