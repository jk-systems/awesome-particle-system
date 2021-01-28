class Dot {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.size = 6;
    //controllers
    this.maxspeed = 10;
    this.maxforce = 1;
  }
  ///////////////////////////////////////////////
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    //finally
    this.acc.mult(0);
  }
  //////////////////////////////////////////////
  show() {
    stroke(0, 0, 255);
    strokeWeight(this.size);
    point(this.pos.x, this.pos.y);
  }
  /////////////////////////////////////////////
  kill() {
    this.pos =(0, 0);
    this.vel =(0, 0);
    this.acc =(0, 0);
    stroke(0);
  }
  /////////////////////////////////////////////
  behavious() {
    //------------------------------------
    var arrive = this.arrive(this.target);
    ////---------------------------------
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
    ///////////////////////////////////////
    arrive.mult(1);
    flee.mult(5);

    ///////////////////////////////////////
    //--------------------------------------
    this.applyForce(arrive);
    ////-------------------------------------
    this.applyForce(flee);
  }
  ////////////////////////////////////////////////
  applyForce(f) {
    this.acc.add(f);
  }
  ///////////////////////////////////////////////
  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d<100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }
  //////////////////////////////////////////////////
  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d<50) {
      desired.setMag(speed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
  //////////////////////////////////////////////////
  gravity(){
    //console.log('Working');
    var target = createVector(this.pos.x , height);
    //console.log(target);
    var desired = p5.Vector.sub(target, this.pos);
    var gf = 0.01;
    desired.setMag(gf);
    //var gravityf = p5.Vector.random2D();
    this.acc.add(desired);
    //noLoop();
  }
  //////////////////////////////////////////////////
}
