import { resetGame } from '../app-logic/resetGame';
import { blurBackground, removeBlur } from '../helpers/blurs';

export const loseModal = () => {
  const container = document.createElement('div');
  const textParagraph = document.createElement('p');
  const restartButton = document.createElement('button');
  textParagraph.innerText = 'Te has equivocado tres veces. Intentalo de nuevo';
  restartButton.innerText = 'Intentar otra vez';

  const bins = Array.from(document.querySelectorAll('.bin'));
  bins.forEach((bin) => (bin.style.pointerEvents = 'none'));
  const carouselButtons = Array.from(
    document.querySelectorAll('button[data-bs-target="#carousel"]')
  );

  carouselButtons.forEach((button) => (button.style.pointerEvents = 'none'));
  container.className = 'd-flex flex-column align-items-center gap-2 modal';
  container.style.width = 'fit-content';
  restartButton.className = 'btn btn-danger align-self-center';
  restartButton.addEventListener('click', () => {
    resetGame(container);
    bins.forEach((bin) => (bin.style.pointerEvents = 'all'));
    carouselButtons.forEach((button) => (button.style.pointerEvents = 'all'));
    removeBlur();
  });
  container.appendChild(textParagraph);
  container.appendChild(restartButton);
  const app = document.querySelector('#app');
  app.appendChild(container);
  blurBackground();
};
