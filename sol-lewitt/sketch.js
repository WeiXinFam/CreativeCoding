let initialLength = 50;
const rectWidth = 20;
function setup() {
  createCanvas(800, 800);
  background(200);
}

function draw() {
  let i = 0;
  while (i < width) {
    if (i == 0) {
      rect(0, 0, initialLength, rectWidth);
    }
    rect((i += initialLength), 0, initialLength, rectWidth);
  }
}
