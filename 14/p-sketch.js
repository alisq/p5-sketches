const sketchNumber = "11";
const sWidth = 1000;
const sHeight = 1000;
let noiseScale=0.02;

function setup() {
	createCanvas(sWidth,sHeight);
	
	

	

} 


function draw() {
	background(255)
	noFill();
	angleMode(DEGREES)


	const totalSteps = 400;
	const startingEllipse = 4;
	const stepDistance=10;
	for(i=0;i<totalSteps;i++) {
		ellipseWidth = startingEllipse+(i*stepDistance);
		ellipse(width/2, height/2,ellipseWidth,height);
	}
	

	for(i=0;i<totalSteps;i++) {
		push();
		rotate(45)
		ellipseWidth = startingEllipse+(i*stepDistance);
		ellipse(width/2, height/2,ellipseWidth,height);
		pop();
	}
	

}
