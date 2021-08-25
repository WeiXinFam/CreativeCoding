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
  // recursiveDrawHorizontal(0, 0);
  // recursiveDrawHorizontal(0, height - rectWidth);
  // recursiveDrawHorizontal(rectWidth, rectWidth);
  // recursiveDrawHorizontal(rectWidth, height - 2 * rectWidth);
  // recursiveDrawVertical(0, rectWidth);
  // recursiveDrawVertical(width - rectWidth, 0);
  // recursiveDrawVertical(rectWidth, 2 * rectWidth);
  // recursiveDrawVertical(width - 2 * rectWidth, rectWidth);
  let i = 0;
  let j = 0;
  while (i < 5) {
    recursiveDrawHorizontal(rectWidth * i, rectWidth * i);
    recursiveDrawHorizontal(rectWidth * i, height - (i + 1) * rectWidth);
    i++;
  }
  noLoop();
}

function recursiveDrawHorizontal(posX, posY) {
  let randLth;
  let continuedX;
  let initalPosX = posX;
  while (posX < width - initalPosX) {
    if (posX == 0) {
      randLth = randomLength(initialLength, rectWidth);
      recursiveFirstRow(posX, posY, randLth, rectWidth);
      posX += randLth;
    }
    randLth = randomLength(initialLength, rectWidth);
    // console.log("continued " + continuedX);
    recursiveFirstRow(posX, posY, randLth, rectWidth);
    posX += randLth;
  }
}

function recursiveDrawVertical(posX, posY) {
  while (posY < height - rectWidth) {
    randLth = randomLength(initialLength, rectWidth);
    recursiveFirstRow(posX, posY, rectWidth, initialLength);
    posY += randLth;
  }
}

// TODO: Renamin function
function recursiveFirstRow(posX, posY, length, width) {
  while (previousColor === currentColor) {
    currentColor = colors[Math.floor(Math.random() * colors.length)];
  }

  fill(currentColor);
  previousColor = currentColor;
  noStroke();
  rect(posX, posY, length, width);
}

function randomLength(min, max) {
  let numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Generated number", numberGenerated);
  return numberGenerated;
}
