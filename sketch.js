//let particles = [];
let emitters = [];
function setup() {
  createCanvas(400, 400);
//   for(let i=0; i<500; i++){
//   particles.push(new Particle(200, 200));
// }
emitters[0] = new Emitter(200, 20);
}

function draw() {
  background(0);
for (let emitter of emitters){
emitter.emit(5);
emitter.show();
emitter.update();
}
}
