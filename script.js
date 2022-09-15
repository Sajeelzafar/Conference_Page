const mobilemenudropdown = document.querySelector('.mobilemenudropdown');
const mobilemenucloseIcon = document.querySelector('.mobilemenucloseIcon');
const mobilemenuIcon = document.querySelector('.mobilemenuIcon');
const showmore = document.querySelector('.showmore');
const teamcontainer = document.querySelector('.teamcontainer');
const showmoreArrow = document.querySelector('.showmoreArrow');
const btntext = document.querySelector('.btntext');
let count = 0;
const x = window.matchMedia('(min-width: 768px)');

const team = [
  {
    id: 'one',
    photo: './Images/Teamphoto1.png',
    name: 'Sajeel Zafar',
    position: 'Student of Full Stack Developer at Microverse (Micronaut)',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'two',
    photo: './Images/Teamphoto2.png',
    name: 'Saira Rubab',
    position: 'Teacher of Computer Science at International Islamic Schools',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'three',
    photo: './Images/Teamphoto1.png',
    name: 'Sajeel Zafar',
    position: 'Student of Full Stack Developer at Microverse (Micronaut)',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'four',
    photo: './Images/Teamphoto2.png',
    name: 'Saira Rubab',
    position: 'Teacher of Computer Science at International Islamic Schools',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'five',
    photo: './Images/Teamphoto1.png',
    name: 'Sajeel Zafar',
    position: 'Student of Full Stack Developer at Microverse (Micronaut)',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 'six',
    photo: './Images/Teamphoto2.png',
    name: 'Saira Rubab',
    position: 'Teacher of Computer Science at International Islamic Schools',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

function createElement(n) {
  const div = document.createElement('div');
  div.classList.add('teambox');
  teamcontainer.appendChild(div);

  const imgdiv = document.createElement('div');
  imgdiv.classList.add('imagebox');
  div.appendChild(imgdiv);

  const image = document.createElement('img');
  image.classList.add('teamImage');
  image.src = n.photo;
  imgdiv.appendChild(image);

  const teamdetails = document.createElement('div');
  teamdetails.classList.add('teamImageDetails');
  div.appendChild(teamdetails);

  const teamName = document.createElement('h3');
  teamName.classList.add('teamName');
  teamName.textContent = n.name;
  teamdetails.appendChild(teamName);

  const teamPosition = document.createElement('p');
  teamPosition.classList.add('teamNamePosition');
  teamPosition.textContent = n.position;
  teamdetails.appendChild(teamPosition);

  const horizontalLine = document.createElement('div');
  horizontalLine.classList.add('teamHorizontalLine');
  teamdetails.appendChild(horizontalLine);

  const teamDescription = document.createElement('p');
  teamDescription.classList.add('teamNameDescription');
  teamDescription.textContent = n.description;
  teamdetails.appendChild(teamDescription);
}

if (x.matches) {
  window.addEventListener('DOMContentLoaded', () => {
    team.forEach((n) => {
      createElement(n);
    });
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 2; i += 1) {
      createElement(team[i]);
    }
  });
}

mobilemenuIcon.addEventListener('click', () => {
  mobilemenudropdown.style.display = 'block';
});

mobilemenucloseIcon.addEventListener('click', () => {
  mobilemenudropdown.style.display = 'none';
  window.scrollTo(0, 0);
});

showmore.addEventListener('click', () => {
  const teambox = document.querySelectorAll('.teambox');
  if (count === 0) {
    btntext.innerHTML = 'LESS';
    showmoreArrow.src = './Images/UpArrow.png';
    for (let i = 2; i < team.length; i += 1) {
      createElement(team[i]);
    }
    count = 1;
  } else if (count === 1) {
    count = 0;
    for (let i = 2; i < team.length; i += 1) {
      teamcontainer.removeChild(teambox[i]);
    }
    btntext.innerHTML = 'MORE';
    showmoreArrow.src = './Images/DownArrow.svg';
  }
});
