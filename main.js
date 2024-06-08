import './src/styles/style.scss';
import { navBins } from './data.json';
import { navBin } from './src/components/navbin';
import { gameBin } from './src/components/gamebin';
import * as bootstrap from 'bootstrap';

const app = () => {
  const navBinsContainer = document.querySelector('.navbins-container');
  const interactionBins = document.querySelector('.interaction-bins');
  for (let i = 0; i < navBins.length; i++) {
    navBinsContainer.appendChild(
      navBin(navBins[i].src, navBins[i].alt, navBins[i].width)
    );
    interactionBins.appendChild(gameBin(navBins[i].src, navBins[i].alt));
  }
};

app();

