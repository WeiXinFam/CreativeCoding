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
  let i = 0;
  while (i < width) {
    if (i == 0) {
      recursiveFirstRow(0, 0, initialLength, rectWidth);
    }
    recursiveFirstRow((i += initialLength), 0, initialLength, rectWidth);
  }
  noLoop();
}

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
