const board = document.querySelector("#board");
const SQUARE_NUMBER = 600;
const colors = ["#ff0000", "#ffaa00", "#aeff00;", "#00ff1a", "#00f2ff", "#002fff", "#d900ff", "##ff005d", "#ff0000"];

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(e) {
  const element = e.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 1px ${color}, 0 0  10px${color}`;
}
function removeColor(e) {
  const element = e.target;
  element.style.backgroundColor = "#010605";
  element.style.boxShadow = "0 0 1px #010605";
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
