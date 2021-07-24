function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(0);

  // Draw Moving Eclipse
  fill(255);
  ellipse(frameCount, height / 2, 300, 300);

  //Draw Moving Text
  fill(120);
  textSize(72);
  textAlign(CENTER);
  text(frameCount, width / 2, height / 2);
}
