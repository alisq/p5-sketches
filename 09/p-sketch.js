const sketchNumber = "09";
const sWidth = 1000;
const sHeight = 1000;
let points;
let vehicles = [];
let size = [];
direction = [];

function preload() {
	font  = loadFont('assets/kada.otf')
}

function setup() {
	createCanvas(sWidth,sHeight);
	//textFont(font)
	//textSize(1200)
	// text('P',100, 900)

	points = font.textToPoints('P', 100,900,1200,{sampleFactor:0.05});
	//console.log(points)
	


	// for (let i=0;i<points.length;i++) {
		
		
	// 	variant = 50
	// 	var randomSize = random(40)
	// 	randomX = (random(variant)-variant/2)+points[i].x
	// 	randomY = (random(variant)-variant/2)+points[i].y
	// 	ellipse(randomX, points[i].y,randomSize, randomSize);
	// }



	for (i=0;i<points.length;i++) {
		
		let vehicle = new Vehicle(points[i].x, points[i].y)
		vehicles.push(vehicle)
	}


	


} 

function draw() {
	background(255)
	//console.log(points)

	for (let i=0;i<points.length;i++) {
		
		vehicles[i].behaviors()
		vehicles[i].update()
		vehicles[i].show();
		// if ((size[i] < 40) && (direction[i] == "ascending")) {
		// 	size[i]++;
		// } else if (size[i] >= 40) {
		// 	size[i]--;
		// 	direction[i] = "descending"
		// } else if ((size[i] < 40) && (direction[i] == "descending")) {
		// 	size[i]--;
		// } else if (size[i] <= 0 ) {
		// 	size[i]++;
		// 	direction[i] == "ascending"
		// }
	
		// ellipse(points[i].x, points[i].y, 5, 5);
	}

}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}