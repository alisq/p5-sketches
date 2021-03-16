const sketchNumber = "10";
const sWidth = 1000;
const sHeight = 1000;

let a = 0.0;
let aVelocity = 0.0;
let aAcceleration = 0.1

function preload() {
	font  = loadFont('assets/kada.otf')
}

function setup() {
	createCanvas(sWidth,sHeight);


	

} 

function draw() {

	a+= aVelocity;
	aVelocity +=aAcceleration;

	aAcceleration = map(mouseX,0,width,-0.001, 0.001)
	background(255)
	stroke(0)
	fill(127)
	translate(width/2,height/2)
	rotate(a)
	rect(0,0,64,36)


}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}