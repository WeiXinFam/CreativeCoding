let spacing = 3;
function setup() {
  createCanvas(800, 800);
  // background(0, 0, 0);
}

function draw() {
  circle(width / 2, height / 2, width / 2);
  stroke(0);
  let i = 0;
  while (i < 68) {
    let posXStart = width / 2 - spacing * i;
    let posXEnd = width / 2 + spacing * i;
    let posYBottom = height / 2 + width / 4;
    let posYStart = height / 2 - width / 4;
    line(posXStart, posYStart, posXStart, posYBottom);
    line(posXEnd, posYStart, posXEnd, posYBottom);
    i++;
    console.log(i);
  }
  quad(
    width / 2 - 80,
    height / 2 - 60,
    width / 2,
    height / 2 - 60,
    width / 2 + 40,
    height / 2 + 60,
    width / 2 - 40,
    height / 2 + 60
  );
  noLoop();
}
