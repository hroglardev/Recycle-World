export const alternativeGameCard = (name, description, src, alt) => {
  const card = document.createElement('article');
  const gameImage = document.createElement('img');
  const info = document.createElement('div');
  const gameName = document.createElement('h3');
  const gameDesc = document.createElement('p');
  const linkToGame = document.createElement('a');

  card.className = 'card';
  gameImage.className = 'card-img-top';
  info.className = 'card-body';
  gameName.className = 'card-title';
  gameDesc.className = 'card-text';
  linkToGame.className = 'btn btn-success';

  gameImage.src = src;
  gameImage.alt = alt;

  gameName.innerText = name;
  gameDesc.innerText = description;
  linkToGame.innerText = 'Visitar juego';

  info.appendChild(gameName);
  info.appendChild(gameDesc);
  info.appendChild(linkToGame);
  card.appendChild(gameImage);
  card.appendChild(info);
  return card;
};
