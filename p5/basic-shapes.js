function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  //simple points
  point(200, 200);

  // draw an X
  line(0, 400, 400, 0);
  line(0, 0, 400, 400);

  // simple rectangle
  rect(30, 20, 100, 200);

  //simple square
  square(250, 100, 100);

  //simple ellipse
  ellipse(150, 200, 150, 100);

  //simple circle
  circle(300, 150, 75);

  //simple triangle
  triangle(200, 150, 250, 250, 150, 250);

  //simple quadilateral
  quad(150, 150, 250, 150, 300, 250, 100, 250);
}
