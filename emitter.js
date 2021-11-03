class Emitter{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.particles = [];
  }
update(){
  for (let particle of particles){
  let gravity = createVector(0, 0.2);
  particle.applyForce(gravity);
  particle.update();
}
  for (let i = particles.length-1; i>=0; i--){
    if(particles[i].finished()){
      particles.splice(i, 1);
    }
  }
}

show(){
  for (let particle of particles){
    particle.show();
    //particle.edges();
  }
}
}
