function setup() {
  //Setup Code
  // the p5.js library automatically executes a sequence of functions, like setup(), which should be called by the library, not the programmer.
  createCanvas(400, 400);
  // background(Math.floor(Math.random() * 256)); //integer between 0 and 255 inclusive, and placed here will only run once
  frameRate(1); //Run the draw() function once per second
}

function draw() {
  //Draw code
  background(Math.floor(Math.random() * 256)); //observe that the backgound color changes everytime
}
