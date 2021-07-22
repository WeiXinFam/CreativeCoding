let borderStrokeWeight = 50;
let dividerStrokeWeight = 25;

function setup() {
  createCanvas(425, 425);
}

function draw() {
  //frame
  stroke(0);
  strokeWeight(borderStrokeWeight);
  square(0, 0, width);

  //dividers
  strokeWeight(dividerStrokeWeight);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  //top-left
  // Calculate the number of lines that we can place
  let spacesLeft =
    width / 2 - borderStrokeWeight * 0.75 - dividerStrokeWeight / 2;
  let numberOfVerticalLines = spacesLeft / dividerStrokeWeight;
  print("number of lines", numberOfVerticalLines);
  for (let lines = 0; lines < ceil(numberOfVerticalLines); lines++) {
    print("line number", lines);
    if (lines % 2 != 0) {
      print("color black");
      stroke(0);
      rect(
        borderStrokeWeight * 0.75 + dividerStrokeWeight * lines,
        borderStrokeWeight * 0.75,
        dividerStrokeWeight,
        spacesLeft
      );
    } else {
      stroke(255);
      rect(
        borderStrokeWeight * 0.75 + dividerStrokeWeight * lines,
        borderStrokeWeight * 0.75,
        dividerStrokeWeight,
        spacesLeft
      );
    }
  }

  //top-right

  //bottom-left

  //bottom-right
}
