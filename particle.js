class Particle {
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 5));
    this.acc = createVector(0, 0);
    this.r = 0.5;

  this.lifetime = 255;
  }

  finished(){
    return(this.lifetime < 0);
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
this.vel.add(this.acc);
this.pos.add(this.vel);
this.acc.set(0, 0);

this.lifetime -= 5;
  }

  show(){
stroke(0, random(0, 255), random(0, 255), this.lifetime);
strokeWeight(0.5);
//fill(random(0, 255),random(0, 255), random(0, 255), this.lifetime);
line(this.pos.x, this.pos.y, this.r * 2, this.r);
  }

  // edges(){
  //   if(this.pos.y >= height - this.r){
  //     this.pos.y = height - this.r;
  //     this.vel.y *= -1;
  //   }
  // }
}
