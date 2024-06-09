export const blurBackground = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const bins = Array.from(document.querySelectorAll('.bin'));
  header.classList.add('filtered');
  main.classList.add('filtered');
  footer.classList.add('filtered');
  bins.forEach((bin) => bin.classList.add('filtered'));
};

export const removeBlur = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const bins = Array.from(document.querySelectorAll('.bin'));

  header.classList.remove('filtered');
  main.classList.remove('filtered');
  footer.classList.remove('filtered');
  bins.forEach((bin) => bin.classList.remove('filtered'));
};
