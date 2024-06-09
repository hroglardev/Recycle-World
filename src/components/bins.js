import { dropCard } from '../app-logic/dropCard';
import { DATA } from '../../src/index';
import { gameBin } from './gamebin';
import { scoreBoard } from '../../main';
import { trash } from '../../main';
import { loseModal } from './loseModal';
import { winModal } from './winModal';
export const bins = () => {
  const interactionBins = document.querySelector('.interaction-bins');

  for (let i = 0; i < DATA.navBins.length; i++) {
    const bin = gameBin(
      DATA.navBins[i].src,
      DATA.navBins[i].alt,
      DATA.navBins[i].color
    );
    bin.addEventListener('click', () => {
      const { result, nameTarget } = dropCard(
        DATA.navBins[i].color,
        scoreBoard
      );
      const gameLost = scoreBoard.checkMistakes();
      gameLost && loseModal();
      const gameWon = scoreBoard.checkScore();
      gameWon && winModal();
      result && trash.removeTrashItem(nameTarget);
    });
    interactionBins.appendChild(bin);
  }
};
