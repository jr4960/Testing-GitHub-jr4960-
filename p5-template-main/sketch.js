let shapes = []
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType == 'square') {
      rect(shape.x, shape.y, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
    if (shape.shapeType == 'ellipse') {
      ellipse(shape.x, shape.y, 100,50);
    }
  }
}
function mousePressed() {
  let shape = shapeDetect();
  if (shape) {
    return null;
  }
  addAShape();
}

function shapeDetect() { 
  for (let shape of shapes) {
    if (shape.x <= mouseX && mouseX <= shape.x + 100 
      && shape.y <= mouseY && mouseY <= shape.y + 100)
      return shape;
  }
  return null;
}

function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red', 'blue', 'green']),
    shapeType: random(['square', 'circle', 'ellipse'])
  }
  shapes.push(shape1);
}