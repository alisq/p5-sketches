const canvasWidth = 1000;
const canvasHeight = 1000;

const lineLength = [565,645,756,86,966,0,255,563,744,855]

function setup() {
	createCanvas(1000,1000)
	background(0)

	angleMode(DEGREES)

	stroke(255)
	strokeWeight(4)
	noFill();






	// for (let i=0;i<20;i++) {
	// 	var ellipseSize = 400+(i*20);
	// 	ellipse(canvasWidth/2,canvasHeight/2,ellipseSize,ellipseSize)
	// }

	// noStroke();
	// fill(0)
	// rect(0,0,500,1000)


  
 }


 function draw () {
	background(0)
	
		totalPasses = lineLength.length;
	//totalPasses = 100;

	let distanceX = 500;
	for (i=0;i<totalPasses;i++) {
		

		startX = 0; //always start lines at the zero point on the X axis
		startY = i*10; //increment the line every 40 pixels
		//distanceX = lineLength[i];
		//distanceX = distanceX + (random(50)-25)
		distanceX = mouseX;
		distanceY = mouseY
		endY = i*10;
		line(lineLength[i],startY,distanceX,distanceY)
	}
 }



function mousePressed() {
	saveCanvas("sketch-01","png")
}