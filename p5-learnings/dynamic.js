let circleWidth = 100;

function setup() {
  createCanvas(400, 400);
  background(220);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}

function draw() {
  // TODO: Move circle to top-left quadrant
  circle(width / 4, height / 4, circleWidth);

  // TODO: Move circle to top-right quadrant
  circle((3 * width) / 4, height / 4, circleWidth);

  // TODO: Move circle to bottom-left quadrant
  circle(width / 4, (3 * height) / 4, circleWidth);

  // TODO: Move circle to bottom-11right quadrant
  circle((3 * width) / 4, (3 * height) / 4, circleWidth);
}
