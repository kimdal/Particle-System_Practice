//let particles = [];
let emitters = [];
function setup() {
  createCanvas(400, 400);
}

function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY));
}

function draw() {
  background(0);
for (let emitter of emitters){
emitter.emit(5);
emitter.show();
emitter.update();
}
}
