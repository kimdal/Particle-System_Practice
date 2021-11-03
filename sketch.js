//let particles = [];
let emitter;
function setup() {
  createCanvas(400, 400);
//   for(let i=0; i<500; i++){
//   particles.push(new Particle(200, 200));
// }
emitter = new Emitter(200, 20);
}

function draw() {
  background(0);
//   for(let i=0; i<5; i++){
//   particles.push(new Particle(200, 20));
// }
// for (let particle of particles){
//   let gravity = createVector(0, 0.2);
//   particle.applyForce(gravity);
//   particle.update();
//   particle.show();
//   //particle.edges();
// }
//
// for (let i = particles.length-1; i>=0; i--){
//   if(particles[i].finished()){
//     particles.splice(i, 1);
//   }
// }
emitter.show();
emitter.update();
}
