export const dropCard = (targetBin, scoreBoard) => {
  let selectedItem = document.querySelector('.selected');
  if (selectedItem.getAttribute('class').split(' ')[0] === targetBin) {
    const score = document.querySelector('#first-counter');
    scoreBoard.incrementScore();
    score.innerText = scoreBoard.getScore();
    const nameTarget = selectedItem.id;
    selectedItem.remove();
    const nextItem = document.querySelector('.carousel-item');
    if (nextItem !== null) {
      nextItem.classList.add('active');
      nextItem.classList.add('selected');
    }
    return { result: true, nameTarget };
  }
  const score = document.querySelector('#second-counter');
  scoreBoard.incrementMistakes();
  score.innerText = scoreBoard.getMistakes();
  return false;
};
