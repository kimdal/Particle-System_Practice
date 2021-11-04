class Confetti extends Particle {
  constructor(x, y){
  super(x, y);
  this.angle = random(TWO_PI);
  //this.vel = createVector(0, -5);
  this.r = 8;
}

update(){
  this.r -= 0.02;
}

show(){
  noStroke();
  fill(0, random(0, 255), 255, this.lifetime);
  push();
  translate(this.x, this.y);
  rotate(this.angle);
  square(0, 0, this.r * 2);
  pop();
}
}
