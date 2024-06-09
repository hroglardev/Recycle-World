import { resetGame } from '../app-logic/resetGame';

export const loseModal = () => {
  const container = document.createElement('div');
  const textParagraph = document.createElement('p');
  const restartButton = document.createElement('button');
  textParagraph.innerText = 'Te has equivocado tres veces. Intentalo de nuevo';
  restartButton.innerText = 'Intentar otra vez';

  const bins = Array.from(document.querySelectorAll('.bin'));
  bins.forEach((bin) => (bin.style.pointerEvents = 'none'));
  container.className = 'd-flex flex-column align-items center gap-2 modal';
  restartButton.className = 'btn btn-danger w-50 align-self-center';
  restartButton.addEventListener('click', () => {
    resetGame(container);
    bins.forEach((bin) => (bin.style.pointerEvents = 'all'));
  });
  container.appendChild(textParagraph);
  container.appendChild(restartButton);
  const app = document.querySelector('#app');
  app.appendChild(container);
};
