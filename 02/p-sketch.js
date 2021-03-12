let angle = 0;


function setup() {


	angleMode(DEGREES)


	var c = createCanvas(1000,1000); //WIDTH AND HEIGHT IN PIXELS
	background(255)
	//rect(0,0,1000,1000)

	

	


	
	
	
	

}


function draw() {
	background(255)
	strokeWeight(2)
	noFill();


	for (var i = 0; i<100;i++) {

		
		
		
		ellipse(500,400,i*7,i*7)
		
	

	}

	angle=angle+1
	

	rectMode(CENTER)
	for (i = 0; i<110; i++) {
		push()
		translate(300,500)
		//rotate(angle)

		if (i < 30) {
			rect(0,0,8*i,8*i)
		} else {
			rect(0,0,30*8,8*i)
		}
		
		pop()
	}

	
}


function mousePressed() {
	saveCanvas("sketch-01","png")
}