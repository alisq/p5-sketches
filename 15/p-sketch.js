const sketchNumber = "15";
const sWidth = 1000;
const sHeight = 1000;
let points;

function preload() {
	font  = loadFont('assets/kada.otf')
}

function setup() {
	createCanvas(sWidth,sHeight);
	textFont(font)
  	//textSize(1200);
	//text('P',100,900)
	points = font.textToPoints('P', 100,900,1200,{sampleFactor:0.05});
	noFill();
	console.log(points)
	for (i=0;i<points.length;i++) {
		//randomSize = random(10,30);
		ellipse(points[i].x, points[i].y,10+(i/10),10+(i/10))
	}


	// for (i=0;i<points.length;i++) {
		
	// 	let vehicle = new Vehicle(points[i].x, points[i].y)
	// 	vehicles.push(vehicle)
	// }


	


} 

function draw() {
	// background(255)
	// //console.log(points)

	// for (let i=0;i<points.length;i++) {
		
	// 	vehicles[i].behaviors()
	// 	vehicles[i].update()
	// 	vehicles[i].show();
	// 	// if ((size[i] < 40) && (direction[i] == "ascending")) {
	// 	// 	size[i]++;
	// 	// } else if (size[i] >= 40) {
	// 	// 	size[i]--;
	// 	// 	direction[i] = "descending"
	// 	// } else if ((size[i] < 40) && (direction[i] == "descending")) {
	// 	// 	size[i]--;
	// 	// } else if (size[i] <= 0 ) {
	// 	// 	size[i]++;
	// 	// 	direction[i] == "ascending"
	// 	// }
	
	// 	// ellipse(points[i].x, points[i].y, 5, 5);
	// }

}

function mousePressed() {
	saveCanvas("sketch-"+sketchNumber,"png")
}