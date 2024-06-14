import { blurBackground, removeBlur } from './blurs';
import Finger from '../assets/pointing-finger.svg';
import Left from '../assets/pointing-left.svg';

export const modalInstruction = () => {
  const container = document.createElement('div');
  const app = document.querySelector('#app');
  const textParagraph = document.createElement('p');
  const nextButton = document.createElement('button');

  nextButton.className = 'instructions-button btn btn-success';
  textParagraph.className = 'instruction-text ';
  textParagraph.innerText =
    "Bienvenido a 'Recycling world'. El objetivo del juego es separar la basura en los cestos correspondientes. Utiliza el rojo para objetos potencialmente tóxicos. El Gris para elementos de papel o carton. El cesto Azul es para desechos metalicos o plasticos, mientras que el verde es para elementos organicos como por ejemplo comidas.";
  nextButton.innerText = 'Siguiente';
  container.className =
    'modal-instruction-start d-flex flex-column align-items center gap-2';

  nextButton.addEventListener('click', () => {
    textParagraph.innerText =
      'Puedes ver tu puntaje aquí. Si te equivocas de cesto 3 veces, pierdes. Para ganar necesitas colocar correctamente los 10 elementos';
    showScore();
  });
  container.appendChild(textParagraph);
  container.appendChild(nextButton);
  app.appendChild(container);
};

export const showScore = () => {
  blurBackground();
  document.querySelector('header').classList.remove('filtered');
  document.querySelector('.logo').classList.add('filtered');

  const scores = document.querySelector('.scores');
  scores.style.color = 'white';
  scores.classList.remove('filtered');
  const finger = document.createElement('img');
  finger.src = Finger;
  finger.alt = 'pointing hand';
  scores.style.position = 'relative';
  finger.classList.add('finger-score');
  scores.appendChild(finger);

  const button = document.querySelector('.instructions-button');
  const newButton = button.cloneNode(true);
  button.parentNode.replaceChild(newButton, button);

  newButton.addEventListener('click', () => {
    document.querySelector('.instruction-text').innerText =
      'Selecciona la tarjeta con el elemento que quieres colocar en un cesto.';
    showCards();
    scores.style.color = 'black';
  });
};

export const showCards = () => {
  blurBackground();
  document.querySelector('.finger-score').remove();
  document.querySelector('.scores').classList.remove('filtered');
  const main = document.querySelector('main');
  const finger = document.createElement('img');
  finger.src = Finger;
  finger.alt = 'pointing hand';

  finger.className = 'finger-cards';
  main.appendChild(finger);
  main.classList.remove('filtered');
  const modal = document.querySelector('.modal-instruction-start');
  modal.style.top = '50%';
  if (window.innerWidth < 768) {
    modal.style.top = '75%';
  }

  const button = document.querySelector('.instructions-button');
  const newButton = button.cloneNode(true);
  button.parentNode.replaceChild(newButton, button);
  Array.from(document.querySelectorAll('.card-item')).forEach((card, index) => {
    card.classList.add('filtered');
    index === 2 && card.classList.remove('filtered');
  });
  newButton.addEventListener('click', () => {
    document.querySelector('.instruction-text').innerText =
      'Haz click en el cesto en el que quieras colocar la basura. ¿Listo?';
    newButton.innerText = 'Comenzar';
    showBins();
  });
};

export const showBins = () => {
  blurBackground();
  const bins = Array.from(document.querySelectorAll('.bin'));
  bins.forEach((bin) => bin.classList.remove('filtered'));
  const aside = document.querySelector('aside');
  const finger = document.querySelector('.finger-cards');

  Array.from(document.querySelectorAll('.card-item')).forEach((card) => {
    card.classList.remove('filtered');
  });

  const modal = document.querySelector('.modal-instruction-start');
  if (window.innerWidth < 768) {
    finger.className = 'finger-bins mobile';
    finger.src = Finger;
    modal.style.top = '30vh';
  } else {
    finger.className = 'finger-bins full';
    finger.src = Left;
  }
  aside.appendChild(finger);

  const button = document.querySelector('.instructions-button');
  const newButton = button.cloneNode(true);
  button.parentNode.replaceChild(newButton, button);
  newButton.addEventListener('click', () => {
    document.querySelector('header > div').classList.remove('filtered');
    removeBlur();
    finger.remove();
    document.querySelector('.modal-instruction-start').remove();
    document.querySelector('main').style.pointerEvents = 'all';
    document.querySelector('aside').style.pointerEvents = 'all';
    document.querySelector('footer > p').classList.add('text-white');
    Array.from(document.querySelectorAll('header p')).forEach((element) =>
      element.classList.add('text-white')
    );
  });
};
