import { card } from './card';
import { trash } from '../../main';

export const cards = () => {
  let trashList = trash.getList();
  const cardsContainer = document.querySelector('#cards-container');

  cardsContainer.innerHTML = '';
  trashList.forEach((trashItem) => {
    const cardItem = card(
      trashItem.src,
      trashItem.alt,
      trashItem.targetBin,
      trashItem.name
    );
    cardItem.addEventListener('click', () => {
      const previousSelection = document.querySelector('.selected');
      if (previousSelection !== null) {
        previousSelection.classList.remove('selected');
      }
      cardItem.classList.add('selected');
    });
    cardItem.classList.remove('carousel-item');
    cardItem.classList.add('card-item');
    cardsContainer.appendChild(cardItem);
  });
};
