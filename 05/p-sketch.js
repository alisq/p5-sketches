let img;
function preload() {
  img = loadImage('bp.png');
}
function setup() {
	createCanvas(1000,1000)
  image(img, 0, 0);

loadPixels();


// noStroke();

 for (let i = 0; i < 1000; i +=10) {
	for (let j=0; j< 1000;j+=10) {

		let c = get(j,i)[0]
		console.log(c)
	//	stroke(c)
		var r = random(20)
		if (c != 255) {
		ellipse(j,i,r,r)
	}
	}
	
 }


  let c = get(50, 90);
  fill(c);
  noStroke();
  rect(25, 25, 50, 50);
}