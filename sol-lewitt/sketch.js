let initialLength = 50;
const rectWidth = 20;
const colors = ["red", "yellow", "orange", "blue", "green", "purple"];

//TODO: Think of a better way around this
let currentColor = "red";
let previousColor = "yellow";

function setup() {
  createCanvas(800, 800);
  background(200);
}

function draw() {
  recursiveDrawHorizontal(0, 0);
  recursiveDrawHorizontal(0, height - rectWidth);
  recursiveDrawVertical(0, 0);
  recursiveDrawVertical(width - rectWidth, 0);
  noLoop();
}

function recursiveDrawHorizontal(posX, posY) {
  while (posX < width) {
    if (posX == 0) {
      recursiveFirstRow(posX, posY, initialLength, rectWidth);
    }
    recursiveFirstRow((posX += initialLength), posY, initialLength, rectWidth);
  }
}

function recursiveDrawVertical(posX, posY) {
  while (posY < height) {
    recursiveFirstRow(posX, (posY += rectWidth), rectWidth, initialLength);
  }
}

// TODO: Renamin function
function recursiveFirstRow(posX, posY, length, width) {
  while (previousColor === currentColor) {
    console.log("Different color", currentColor);
    currentColor = colors[Math.floor(Math.random() * colors.length)];
  }

  fill(currentColor);
  previousColor = currentColor;
  noStroke();
  rect(posX, posY, length, width);
}
