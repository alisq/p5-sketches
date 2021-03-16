const sketchNumber = "11";
const sWidth = 1000;
const sHeight = 1000;
let noiseScale=0.02;

function setup() {
	createCanvas(sWidth,sHeight);

} 


function draw() {

	background(0)
	stroke(255);
	
	//console.log(noiseVal)
	let n  = mouseY
	for (i=0;i<100;i++) {
		noiseVal = mouseY+random(-20,20)
		line(i*10,0,i*10, noiseVal)
	}
}