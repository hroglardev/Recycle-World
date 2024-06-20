export const alternativeGameCard = (name, description, src, alt, link) => {
  const card = document.createElement('article');
  const gameImage = document.createElement('img');
  const info = document.createElement('div');
  const gameName = document.createElement('h3');
  const gameDesc = document.createElement('p');
  const linkToGame = document.createElement('a');

  card.className = 'card';
  info.className = 'card-body d-flex flex-column';
  gameName.className = 'card-title fs-4 text';
  gameDesc.className = 'card-text fs-5 text';
  linkToGame.className = 'btn btn-success align-self-center';
  linkToGame.setAttribute('href', link);
  gameImage.src = src;
  gameImage.alt = alt;
  gameImage.loading = 'lazy';
  gameImage.width = 175;

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
