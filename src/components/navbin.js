export const navBin = (src, alt, width) => {
  const container = document.createElement('div');
  const counter = document.createElement('p');
  const image = document.createElement('img');

  container.appendChild(counter);
  container.appendChild(image);
  container.className = 'bin d-flex align-items-center';

  counter.innerText = '0';
  counter.className = 'counter fs-2 m-0';

  image.src = src;
  image.alt = alt;
  image.style = `width: ${width}`;

  return container;
};
