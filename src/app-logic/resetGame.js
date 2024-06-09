import { trash, scoreBoard } from '../../main';
import { carousel } from '../components/carousel';

export const resetGame = (modal) => {
  const scores = Array.from(document.querySelectorAll('.counter'));
  scores.forEach((item) => (item.innerText = '0'));
  modal.remove();
  scoreBoard.resetScoreBoard();
  trash.cleanTrash();
  trash.buildTrash();
  carousel();
};
