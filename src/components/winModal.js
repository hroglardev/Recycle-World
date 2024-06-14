import { resetGame } from '../app-logic/resetGame';
import { DATA } from '../../src/index';
import { alternativeGameCard } from './alternativeGameCard';

export const winModal = () => {
  const container = document.createElement('div');
  const textParagraph = document.createElement('p');
  const gamesContainer = document.createElement('div');
  const restartButton = document.createElement('button');
  textParagraph.innerText = 'Felicitaciones, eres un gran reciclador';
  restartButton.innerText = 'Jugar otra vez';
  const bins = Array.from(document.querySelectorAll('.bin'));
  bins.forEach((bin) => (bin.style.pointerEvents = 'none'));
  DATA.games.forEach((game) => {
    gamesContainer.appendChild(
      alternativeGameCard(
        game.name,
        game.description,
        game.src,
        game.alt,
        game.link
      )
    );
  });

  container.className = 'd-flex flex-column align-items center gap-2 modal';
  gamesContainer.className = 'alternative-games';
  restartButton.className = 'btn btn-success align-self-center';
  restartButton.addEventListener('click', () => {
    resetGame(container);
    bins.forEach((bin) => (bin.style.pointerEvents = 'all'));
  });
  container.appendChild(textParagraph);
  container.appendChild(gamesContainer);
  container.appendChild(restartButton);
  const app = document.querySelector('#app');
  app.appendChild(container);
};
