import { dropCard } from '../app-logic/dropCard';
import { navBins } from '../../data.json';
import { gameBin } from './gamebin';
import { scoreBoard } from '../../main';
import { trash } from '../../main';
import { loseModal } from './loseModal';
import { winModal } from './winModal';
export const bins = () => {
  const interactionBins = document.querySelector('.interaction-bins');

  for (let i = 0; i < navBins.length; i++) {
    const bin = gameBin(navBins[i].src, navBins[i].alt, navBins[i].color);
    bin.addEventListener('click', () => {
      const { result, nameTarget } = dropCard(navBins[i].color, scoreBoard);
      const gameLost = scoreBoard.checkMistakes();
      gameLost && loseModal();
      const gameWon = scoreBoard.checkScore();
      gameWon && winModal();
      result && trash.removeTrashItem(nameTarget);
    });
    interactionBins.appendChild(bin);
  }
};
