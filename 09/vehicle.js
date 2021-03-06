function Vehicle(x,y) {
	this.pos = createVector(random(width), random(height));
	this.target = createVector(x, y);
	this.vel = p5.Vector.random2D();
	this.acc = createVector();
	this.r = 8;
	this.maxspeed = 5; 
	this.maxforce = 0.3;

}

Vehicle.prototype.behaviors = function() {
	var arrive = this.arrive(this.target)
	this.applyForce(arrive)
}

Vehicle.prototype.update = function() {
	this.pos.add(this.vel)
	this.vel.add(this.acc)
	this.acc.mult(0)

}

Vehicle.prototype.applyForce = function(f) {
	this.acc.add(f);
}


Vehicle.prototype.show = function() {
	this.pos.add(this.vel)
	this.vel.add(this.acc)
	noStroke();
	fill(0);
	ellipse(this.pos.x, this.pos.y, this.r, this.r);

}

Vehicle.prototype.arrive = function(target) {
	var desired = p5.Vector.sub(target, this.pos)
	var d = desired.mag();
	var speed = this.maxspeed;
	if (d < 100) {
		speed = map(d, 0, 100, this.maxspeed)
	} 
	desired.setMag(speed)
	var steer = p5.Vector.sub(desired, this.vel)
	steer.limit(this.maxforce)
	return steer
}

