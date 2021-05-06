let bg;
let fg;
let layer;


function setup() {
  createCanvas(400, 400);
  layer = createGraphics(400, 400);
  bg = random(["#002a29", "#007a79", "#c7cedf", "#976f4f", "#4d2a16"]);
  fg = random(["#f9de59", "#e8a628", "#f98365", "#c33124", "#a1dffb"]);
}

function draw() {
  background(bg);
  layer.stroke(fg);
  layer.fill(bg);

  let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
  if (distance > 20) {
    layer.strokeWeight(1);
  } else if (distance > 10) {
    layer.strokeWeight(1);
    layer.circle(pmouseX, pmouseY, distance);
  } else {
    layer.strokeWeight(5);
  }

  layer.line(pmouseX, pmouseY, mouseX, mouseY);
  image(layer, 0, 0);
  
  fill(fg);
  stroke(255);
  circle(mouseX, mouseY, 10);
  
  instructions();
}

function instructions() {
  fill(fg);
  noStroke();
  textSize(12);
  textAlign(RIGHT);
  text("MOVE to draw, DOUBLE CLICK to clear", width - 20, height - 20);
}


function doubleClicked() {
  layer.clear();

  bg = random(["#002a29", "#007a79", "#c7cedf", "#976f4f", "#4d2a16"]);
  fg = random(["#f9de59", "#e8a628", "#f98365", "#c33124", "#a1dffb"]);
}
