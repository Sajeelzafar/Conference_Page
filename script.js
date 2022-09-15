const mobilemenudropdown = document.querySelector('.mobilemenudropdown');
const mobilemenucloseIcon = document.querySelector('.mobilemenucloseIcon');
const mobilemenuIcon = document.querySelector('.mobilemenuIcon');
const showmore = document.querySelector('.showmore');
const teamboxdesktop = document.querySelectorAll('.teamboxdesktop');
const showmoreArrow = document.querySelector('.showmoreArrow');
const btntext = document.querySelector('.btntext');

mobilemenuIcon.addEventListener('click', () => {
  mobilemenudropdown.style.display = 'block';
});

mobilemenucloseIcon.addEventListener('click', () => {
  mobilemenudropdown.style.display = 'none';
  window.scrollTo(0, 0);
});
let count = 0;

showmore.addEventListener('click', () => {
  if (count === 0) {
    Array.from(teamboxdesktop).forEach((n) => {
      n.style.display = 'flex';
    });
    btntext.innerHTML = 'LESS';
    showmoreArrow.src = './Images/UpArrow.png';
    count = 1;
  } else if (count === 1) {
    Array.from(teamboxdesktop).forEach((n) => {
      n.style.display = 'none';
    });
    count = 0;
    btntext.innerHTML = 'MORE';
    showmoreArrow.src = './Images/DownArrow.svg';
  }
});
