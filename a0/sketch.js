function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {

	//map background color
	c1 = map(hour(), 0, 23, 255, 120);
	c2 = map(hour(), 0, 23, 200, 0)

	back_col = map(hour(), 0, 23, 0, 255);

	background(back_col);


	//textSize(32);

	var sec_angle = 0;
	var sec_inc = (2 * Math.PI) / 59;
	for (i = 0; i < second(); i++){
		strokeWeight(.5);
		fill(196,234,250);
		ellipse((280 * Math.cos(sec_angle)) + 400 , (280 * Math.sin(sec_angle)) + 300, 15, 15);

		//incrememnt angle
		sec_angle += sec_inc;
	}
	//fill(0);
	//text(second(), 10, 90);

	var min_angle = 0;
	var min_inc = (2 * Math.PI) / 59;
	for (i = 0; i < minute(); i++){
		fill(125,212,239);
		ellipse((220 * Math.cos(min_angle)) + 400 , (220 * Math.sin(min_angle)) + 300, 20, 20);

		//incrememnt angle
		min_angle += min_inc;
	}
	//fill(100);
	//text(minute(), 10, 60);

	var hr_angle = 0;

	var hr_inc = (2 * Math.PI) / 23;
	for (i = 0; i < hour(); i++){
		fill(75,172,236);
		ellipse((150 * Math.cos(hr_angle)) + 400 , (150 * Math.sin(hr_angle)) + 300, 30, 30);

		//incrememnt angle
		hr_angle += hr_inc;
	}
	//fill(180);
	//text(hour(), 10, 30);

	
}

