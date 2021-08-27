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
  while (i < 20) {
    recursiveDrawHorizontal(rectWidth * i, rectWidth * i);
    recursiveDrawHorizontal(rectWidth * i, height - (i + 1) * rectWidth);
    recursiveDrawVertical(rectWidth * i, rectWidth * (i + 1));
    recursiveDrawVertical(width - rectWidth * (i + 1), rectWidth * i);
    i++;
  }
  noLoop();
}

function recursiveDrawHorizontal(posX, posY) {
  let randLth;
  let initalPosX = posX;
  while (posX < width - initalPosX) {
    randLth = randomLength(initialLength, rectWidth);

    // Ensures the width is exactly as intended for
    if (posX + randLth > width - initalPosX) {
      randLth = width - initalPosX - posX;
    }

    drawBlocks(posX, posY, randLth, rectWidth);
    posX += randLth;
  }
}

function recursiveDrawVertical(posX, posY) {
  let randLth;
  let initalPosY = posY;
  while (posY < height - initalPosY) {
    randLth = randomLength(initialLength, rectWidth);

    // Ensures the width is exactly as intended for
    if (posY + randLth > height - initalPosY) {
      randLth = height - initalPosY - posY;
    }

    drawBlocks(posX, posY, rectWidth, randLth);
    posY += randLth;
  }
}

// TODO: Renamin function
function drawBlocks(posX, posY, length, width) {
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

//TODO: Function to keep track of the colours for two lines so no overlapping
//TODO: Fix colour scheme
