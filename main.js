import './src/styles/style.scss';

import * as bootstrap from 'bootstrap';
import { Trash } from './src/app-logic/trash';
import { ScoreBoard } from './src/app-logic/scoreBoard';

import { bins } from './src/components/bins';
import { carousel } from './src/components/carousel';
import { cards } from './src/components/cards';

export const trash = new Trash();
export const scoreBoard = new ScoreBoard();
trash.buildTrash();

const app = () => {
  window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    const carouselSelected = document.querySelector('.active');
    screenWidth > 768
      ? carouselSelected.classList.remove('selected')
      : carouselSelected.classList.add('selected');
  });
  carousel();
  cards();
  bins();
};

app();

