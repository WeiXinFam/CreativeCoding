let spacing = 10;
function setup() {
  createCanvas(800, 800);
  background(0, 0, 0);
}

function draw() {
  circle(width / 2, height / 2, width / 2);
  stroke(0);
  let i = 0;
  while (i < 20) {
    let posXStart = width / 2 - spacing * i;
    let posXEnd = width / 2 + spacing * i;
    line(posXStart, height / 2 + 20, posXStart, height / 2 - 20);
    line(posXEnd, height / 2 + 20, posXEnd, height / 2 - 20);
    i++;
    console.log(i);
  }
  noLoop();
}
