import Banana from '../src/assets/banana.png';
import Battery from '../src/assets/battery.png';
import BlueBin from '../src/assets/blue-bin.svg';
import Bolt from '../src/assets/bolt.png';
import Grass from '../src/assets/grass.png';
import GrayBin from '../src/assets/gray-bin.svg';
import GreenBin from '../src/assets/green-bin.svg';
import Magazine from '../src/assets/magazine.png';
import Newspaper from '../src/assets/newspaper.png';
import Nuclear from '../src/assets/nuclear.png';
import OpenBox from '../src/assets/open-box.png';
import RottenApple from '../src/assets/rotten-apple.png';
import Saw from '../src/assets/saw.png';
import Teabag from '../src/assets/teabag.png';
import Teacup from '../src/assets/teacup.png';
import Thermometer from '../src/assets/thermometer.png';
import ToiletRoll from '../src/assets/toilet-roll.png';
import Vaccine from '../src/assets/vaccine.png';
import WaterBottle from '../src/assets/water-bottle.png';
import RedBin from '../src/assets/red-bin.svg';

export const DATA = {
  games: [
    {
      id: 0,
      src: RedBin,
      alt: 'Tacho rojo',
      name: 'juego 1',
      description: 'un jueguito'
    },
    {
      id: 0,
      src: RedBin,
      alt: 'Tacho rojo',
      name: 'juego 2',
      description: 'un jueguito'
    },
    {
      id: 0,
      src: RedBin,
      alt: 'Tacho rojo',
      name: 'juego 3',
      description: 'un jueguito'
    },
    {
      id: 0,
      src: RedBin,
      alt: 'Tacho rojo',
      name: 'juego 4',
      description: 'un jueguito'
    }
  ],
  navBins: [
    {
      id: 0,
      src: RedBin,
      alt: 'Tacho rojo',
      width: '40px',
      color: 'Red'
    },
    {
      id: 1,
      src: GrayBin,
      alt: 'Tacho gris',
      width: '40px',
      color: 'Gray'
    },
    {
      id: 2,
      src: BlueBin,
      alt: 'Tacho azul',
      width: '40px',
      color: 'Blue'
    },
    {
      id: 3,
      src: GreenBin,
      alt: 'Tacho verde',
      width: '40px',
      color: 'Green'
    }
  ],
  trash: [
    {
      id: 0,
      name: 'Banana',
      targetBin: 'Green',
      src: Banana,
      alt: 'banana'
    },
    {
      id: 1,
      name: 'Cesped',
      targetBin: 'Green',
      src: Grass,
      alt: 'cesped'
    },
    {
      id: 2,
      name: 'Apple',
      targetBin: 'Green',
      src: RottenApple,
      alt: 'manzana-comida'
    },
    {
      id: 3,
      name: 'Saquito de te',
      targetBin: 'Green',
      src: Teabag,
      alt: 'Saquito de te'
    },
    {
      id: 4,
      name: 'Serrucho',
      targetBin: 'Blue',
      src: Saw,
      alt: 'Serrucho'
    },
    {
      id: 5,
      name: 'Taza de plastico',
      targetBin: 'Blue',
      src: Teacup,
      alt: 'Vaso de plastico'
    },
    {
      id: 6,
      name: 'Tornillo',
      targetBin: 'Blue',
      src: Bolt,
      alt: 'Tornillo'
    },
    {
      id: 7,
      name: 'Botella de plastico',
      targetBin: 'Blue',
      src: WaterBottle,
      alt: 'Botella de plastico'
    },
    {
      id: 8,
      name: 'Termometro',
      targetBin: 'Red',
      src: Thermometer,
      alt: 'Termometro'
    },
    {
      id: 9,
      name: 'Bateria',
      targetBin: 'Red',
      src: Battery,
      alt: 'Pila alcalina'
    },
    {
      id: 10,
      name: 'Desechos toxicos',
      targetBin: 'Red',
      src: Nuclear,
      alt: 'Desechos tóxicos'
    },
    {
      id: 11,
      name: 'Jeringa',
      targetBin: 'Red',
      src: Vaccine,
      alt: 'Jeringa'
    },
    {
      id: 12,
      name: 'Papel-higienico',
      targetBin: 'Gray',
      src: ToiletRoll,
      alt: 'Papel higienico'
    },
    {
      id: 13,
      name: 'Caja de carton',
      targetBin: 'Gray',
      src: OpenBox,
      alt: 'Caja de carton'
    },
    {
      id: 14,
      name: 'Periodico',
      targetBin: 'Gray',
      src: Newspaper,
      alt: 'Periodico'
    },
    {
      id: 15,
      name: 'Revista',
      targetBin: 'Gray',
      src: Magazine,
      alt: 'Revista'
    }
  ]
};
