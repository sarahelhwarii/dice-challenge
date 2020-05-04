const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

img1.setAttribute("src", `images/dice${randomNumber1}.png`);
img2.setAttribute("src", `images/dice${randomNumber2}.png`);
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "player 1,You won!!";
  document.querySelector("h1").classList.add("new");
} else {
  document.querySelector("h1").textContent = "player 2,You won!!";
  document.querySelector("h1").classList.add("new");
}
