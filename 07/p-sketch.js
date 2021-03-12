
function setup() {
	createCanvas(1000,1000)


	noFill();



	for (i=0;i<500;i=i+5) {
		ellipse(200+i,200,350,350)
		ellipse(200+i,800,350,350)
	}

  
 }




function mousePressed() {
	saveCanvas("sketch-01","png")
}