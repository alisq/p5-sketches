const sketchNumber = "12";
const sWidth = 1000;
const sHeight = 1000;

let bubbles = [];
let j = 0;
function setup() {
	rectMode(CENTER)
	noFill()
	createCanvas(sWidth,sHeight);
		//noFill()
		
		translate(0,500)
		
		for (i=0;i<90;i++) {
			push();
				translate(width/2,0);
				rotate(cos(i/20))
				rect(0,i,100, 100);
			pop();
		}

} 


function draw() {

	
}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}

