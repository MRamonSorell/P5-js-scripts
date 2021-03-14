function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	// draw white rectangle
	fill(255,255,255)
	rect(100,50, 200, 200)

	// draw white rectangle
	fill(255,255,255)
	rect(100,250, 200, 200)

	// draw blue rectangle
	fill(0,0,205)
	rect(100,450, 200, 200)

	// draw whit rectangle
	fill(255,255,255)
	rect(300,450, 300, 200)

	// draw white rectangle
	fill(255,255,255)
	rect(600,450, 100, 100)

	// draw yellow rectangle
	fill(255,211,0)
	rect(600,550, 100, 100)

}