const mobilemenudropdown = document.querySelector(".mobilemenudropdown");
const mobilemenucloseIcon = document.querySelector(".mobilemenucloseIcon");
const mobilemenuIcon = document.querySelector(".mobilemenuIcon");

mobilemenuIcon.addEventListener("click", () => {
    mobilemenudropdown.style.display = "block";
});

mobilemenucloseIcon.addEventListener("click", () => {
    mobilemenudropdown.style.display = "none";
});