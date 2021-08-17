let borderWeight = 20;
let spaceBetweenLines = borderWeight * 5;

function setup() {
  createCanvas(800, 800);
  stroke(0);
}

function draw() {
  //Borders
  noFill();
  strokeWeight(borderWeight);
  square(0, 0, width);

  strokeWeight(borderWeight / 2);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

  // Top
  let spaceLeft = width / 2 - borderWeight;
  let numberOfLines = spaceLeft / spaceBetweenLines;

  // Top Left
  for (let xPos = 1; xPos < ceil(numberOfLines); xPos++) {
    line(xPos * spaceBetweenLines, 0, xPos * spaceBetweenLines, height / 2);
  }

  //Top Right
  for (let yPos = 1; yPos < ceil(numberOfLines); yPos++) {
    line(width / 2, yPos * spaceBetweenLines, width, yPos * spaceBetweenLines);
  }

  //Bottom
  for (let diagLeft = 1; diagLeft < ceil(numberOfLines) + 1; diagLeft++) {
    let xShift = diagLeft * spaceBetweenLines;
    line(0, height / 2 + xShift, xShift, height / 2);
    line(xShift, height, width / 2, height / 2 + xShift);
  }

  for (let diagRight = 1; diagRight < ceil(numberOfLines) + 1; diagRight++) {
    let xShift = diagRight * spaceBetweenLines;
    line(width - xShift, height / 2, width, height / 2 + xShift);
    line(width / 2, height / 2 + xShift, width - xShift, height);
  }
}
