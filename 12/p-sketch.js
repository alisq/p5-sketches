const sketchNumber = "11";
const sWidth = 1000;
const sHeight = 1000;

let bubbles = [];
let j = 0;
function setup() {
	createCanvas(sWidth,sHeight);
	rectMode(CENTER)
	noFill()

	for(i=0;i<105;i++) {
		bubbles[i] = new Bubble();
	}
	for (i=0;i<200;i++) {

		

		
	}

} 


function draw() {

		
	background(255)

	push()
			
			translate(j*5, height/2)
			rotate(sin(j/20))
			rect(0,0,100,100)
		pop()
	j++
	for (i=0;i<bubbles.length;i++) {
		bubbles[i].move();
		bubbles[i].display()
	}
}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}


function Bubble() {
	this.x = random(0, width)
	this.y = random(8, height)

	this.display = function() {
		stroke(0);
		noFill();
		ellipse(this.x, this.y, 24, 24)
	}

	this.move = function() {
		this.x = this.x + random(-1,1)
		this.y = this.y + random(-1,1)
	}
}