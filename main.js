import './src/styles/style.scss';

import * as bootstrap from 'bootstrap';
import { Trash } from './src/app-logic/trash';
import { ScoreBoard } from './src/app-logic/scoreBoard';

import { bins } from './src/components/bins';
import { carousel } from './src/components/carousel';

export const trash = new Trash();
export const scoreBoard = new ScoreBoard();
trash.buildTrash();

const app = () => {
  bins();
  carousel();
};

app();

