class Particle extends p5.Vector {
  constructor(x, y){
    //this.pos = createVector(x, y);
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, -5));
    this.acc = createVector(0, -1);
    this.r = 3;

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
this.add(this.vel);
this.acc.set(0, 0);

this.lifetime -= 15;
  }

  show(){
//stroke(255, this.lifetime);
strokeWeight(2);
fill(0, random(0, 255), 255, this.lifetime);
ellipse(this.x, this.y, this.r * 2);
  }

  // edges(){
  //   if(this.pos.y >= height - this.r){
  //     this.pos.y = height - this.r;
  //     this.vel.y *= -1;
  //   }
  // }
}
