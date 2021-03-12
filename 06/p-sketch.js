
function setup() {
	createCanvas(1000,1000)
	background(0)

	angleMode(DEGREES)

	stroke(255)
	noFill();
	for (i=0;i<360;i++) {
		push();
			translate(500,500)
			rotate(i)
			rect(0,0,500,500)
		pop();
	}
	



  
 }




function mousePressed() {
	saveCanvas("sketch-01","png")
}