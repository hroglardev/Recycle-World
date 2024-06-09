import './src/styles/style.scss';

import * as bootstrap from 'bootstrap';
import { Trash } from './src/app-logic/trash';
import { ScoreBoard } from './src/app-logic/scoreBoard';

import { bins } from './src/components/bins';
import { carousel } from './src/components/carousel';
import { cards } from './src/components/cards';
import {
  showCards,
  showScore,
  showBins,
  modalInstruction
} from './src/helpers/instructions';
import { blurBackground } from './src/helpers/blurs';

export const trash = new Trash();
export const scoreBoard = new ScoreBoard();
trash.buildTrash();

const app = () => {
  window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const carouselSelected = document.querySelector('.active');
    const cardsSelected = document.querySelector('#cards-container .selected');
    screenWidth > 768 && carouselSelected !== null
      ? carouselSelected.classList.remove('selected')
      : carouselSelected.classList.add('selected');
    screenWidth < 768 &&
      cardsSelected !== null &&
      cardsSelected.classList.remove('selected');
  });
  document.querySelector('main').style.pointerEvents = 'none';
  document.querySelector('aside').style.pointerEvents = 'none';
  carousel();
  cards();
  bins();

  modalInstruction();
  blurBackground();
};

app();

