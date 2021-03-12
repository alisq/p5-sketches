function setup() {
	
	createCanvas(1000,1000)
	// Define the curve points as JavaScript objects
	strokeWeight(3)
let p1 = { x: 250, y: 0 };
let p2 = { x: 0, y: 0 };
let p3 = { x: 500, y: 500 };
let p4 = { x: 500, y: 250 };
noFill();
stroke(255, 102, 0);
curve(-500, 0, 0, 0, 200, 200, 0, 500);

}