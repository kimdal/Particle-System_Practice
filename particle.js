class particle {
  coustructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
this.vel.add(this.acc);
this.pos.add(this.vel);
this.acc.set(0, 0);
  }

  show(){
stroke(255);
strokeWeight(2);
fill(255, 100);
ellipse(this.pos.x, this.pos.y, this.r*2);
  }

  edges(){
    if(this.pos.y >= height-this.r){
      this.pos.y = height-this.r;
      this.vel.y *= -1;
    }
  }
}
