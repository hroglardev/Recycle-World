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
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967273/red-bin_p3asrm.svg',
      alt: 'Tacho rojo',
      width: '40px',
      color: 'Red'
    },
    {
      id: 1,
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/gray-bin_irnmko.svg',
      alt: 'Tacho gris',
      width: '40px',
      color: 'Gray'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/blue-bin_s8xhdc.svg',
      alt: 'Tacho azul',
      width: '40px',
      color: 'Blue'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/green-bin_gfkdtt.svg',
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
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/banana_dm3svm.png',
      alt: 'banana'
    },
    {
      id: 1,
      name: 'Cesped',
      targetBin: 'Green',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/grass_cgob8u.png',
      alt: 'cesped'
    },
    {
      id: 2,
      name: 'Apple',
      targetBin: 'Green',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/rotten-apple_oqckiy.png',
      alt: 'manzana-comida'
    },
    {
      id: 3,
      name: 'Saquito de te',
      targetBin: 'Green',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/teabag_ytalje.png',
      alt: 'Saquito de te'
    },
    {
      id: 4,
      name: 'Serrucho',
      targetBin: 'Blue',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/saw_fkbxsf.png',
      alt: 'Serrucho'
    },
    {
      id: 5,
      name: 'Taza de plastico',
      targetBin: 'Blue',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/teacup_mupdsc.png',
      alt: 'Vaso de plastico'
    },
    {
      id: 6,
      name: 'Tornillo',
      targetBin: 'Blue',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967272/bolt_qzgn3k.png',
      alt: 'Tornillo'
    },
    {
      id: 7,
      name: 'Botella de plastico',
      targetBin: 'Blue',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/water-bottle_c3eu89.png',
      alt: 'Botella de plastico'
    },
    {
      id: 8,
      name: 'Termometro',
      targetBin: 'Red',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/thermometer_pleexr.png',
      alt: 'Termometro'
    },
    {
      id: 9,
      name: 'Bateria',
      targetBin: 'Red',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/battery_ri5jse.png',
      alt: 'Pila alcalina'
    },
    {
      id: 10,
      name: 'Desechos toxicos',
      targetBin: 'Red',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/nuclear_htmxnw.png',
      alt: 'Desechos tóxicos'
    },
    {
      id: 11,
      name: 'Jeringa',
      targetBin: 'Red',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/vaccine_tiltgi.png',
      alt: 'Jeringa'
    },
    {
      id: 12,
      name: 'Papel-higienico',
      targetBin: 'Gray',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967275/toilet-roll_zzb8kd.png',
      alt: 'Papel higienico'
    },
    {
      id: 13,
      name: 'Caja de carton',
      targetBin: 'Gray',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967271/open-box_odsgiq.png',
      alt: 'Caja de carton'
    },
    {
      id: 14,
      name: 'Periodico',
      targetBin: 'Gray',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/newspaper_axixye.png',
      alt: 'Periodico'
    },
    {
      id: 15,
      name: 'Revista',
      targetBin: 'Gray',
      src: 'https://res.cloudinary.com/djwg0bdyh/image/upload/v1717967274/magazine_shszak.png',
      alt: 'Revista'
    }
  ]
};
