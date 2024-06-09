import { card } from './card';
import { trash } from '../../main';

export const carousel = () => {
  let trashList = trash.getList();
  const carouselContainer = document.querySelector('.carousel-inner');
  carouselContainer.innerHTML = '';
  trashList.forEach((trashItem, index) => {
    const cardItem = card(
      trashItem.src,
      trashItem.alt,
      trashItem.targetBin,
      trashItem.name
    );
    cardItem.addEventListener('click', () => {
      document.querySelector('.selected').classList.remove('selected');
      cardItem.classList.add('selected');
    });
    if (index === 0) {
      cardItem.classList.add('active');
      cardItem.classList.add('selected');
    }

    carouselContainer.appendChild(cardItem);
  });
};
