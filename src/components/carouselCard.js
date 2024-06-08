<div class='carousel-item'>
  <img
    src='./src/assets/images/toilet-roll.png'
    class='d-block w-100'
    alt='...'
  />
</div>;

export const carouselCard = (src, alt, targetBin) => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  container.appendChild(image);
  container.className = `${targetBin} carousel-item`;
  image.src = src;
  image.alt = alt;
  image.className = 'd-block w-100';

  return container;
};
