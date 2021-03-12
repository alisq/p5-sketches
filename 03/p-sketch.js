let angle = 0;


function setup() {


	angleMode(DEGREES)


	var c = createCanvas(1000,1000); //WIDTH AND HEIGHT IN PIXELS
	background(255)
	//rect(0,0,1000,1000)

	

	
	stroke(0)
	//noFill();
	for(var i = 0;i<100; i++) {
		//add our code here

		//ellipse(i*50,i*50,250,250)
		
	}

	//fill(255)
	//stroke(255)
	//noStroke()

	noFill()

	
	for (var i=0;i<100;i++) {
		push()
	translate(72,224)
	rotate(42)
	rect(i*4,i*4,50,50)
	pop()

	

	}

	for (var i = 0; i<180;i++) {

		push();
		translate(250,250);
		rotate(i*2)
		rect(100,100,50,50)
		pop();
	

	}
	
	// push();
	// translate(250,250);
	// rotate(66*2)
	// rect(100,100,50,50)
	// pop();


	
	
	
	

}


function draw() {
	stroke(0)
	strokeWeight(4)
	noFill()

	

	//rRadius = random(50)+50
	//ellipse(mouseX,mouseY,rRadius,rRadius)


	//line( mouseX, mouseY,  mouseX+50, mouseY+30);
}


function mousePressed() {
	saveCanvas("sketch-01","png")
}