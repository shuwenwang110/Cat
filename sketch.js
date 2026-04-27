function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
rectMode(CENTER);
textSize(60);
//frameRate(100);
}


function draw() {
  //background(100, 4);
  //fill(random(255), random(255), random(255));
circle(mouseX, mouseY, 80-abs(pmouseX-mouseX));
textSize(random(100));
stroke(255);
strokeWeight((50-abs(pmouseX-mouseX))/4);
if (mouseIsPressed){
  fill("red");
  stroke("red");
}
else {
  fill("white");
  stroke("white");
}
line(pmouseX, pmouseY, mouseX, mouseY);
//text("^^", mouseX, mouseY)
//line(width/2, height/2, mouseX, mouseY);
}
