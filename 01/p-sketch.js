var kada;
function preload() {
  kada = loadFont('assets/kada.otf');
}




function setup() {





	var c = createCanvas(1000,1000); //WIDTH AND HEIGHT IN PIXELS
	background(255)
	//rect(0,0,1000,1000)

	

	// FONT EMBED CODE ADAPTED FROM: 
	// https://p5js.org/reference/#/p5/loadFont
  	fill('#ED225D');
  	textFont(kada);
  	textSize(360);
  	text('ASQ', 100, 800);


	
	stroke(0)
	//noFill();
	for(var i = 0;i<100; i++) {
		//add our code here

		//ellipse(i*50,i*50,250,250)
		
	}

	fill(255)
	//stroke(255)
	noStroke()

	
	rect(100,100,100,500)
	ellipse(260,230,250,250)
	fill(255)
	ellipse(260,230,75,75)

}


function draw() {
	stroke(0)
	strokeWeight(4)
	noFill()
	//rRadius = random(50)+50
	//ellipse(mouseX,mouseY,rRadius,rRadius)


	line( mouseX, mouseY,  mouseX+50, mouseY+30);
}


function mousePressed() {
	saveCanvas("sketch-01","png")
}