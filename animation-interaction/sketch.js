var centerX = 0;
var centerY = 0;

var pupilY = 80;
var pupilX = 180;
var noseX = 252;
var noseY = 160;

var mapX = 0;
var mapY = 0;

var canvasWidth = 0;
var canvasHeight = 0;

function setup() {
  createCanvas(500,500);
  console.log("current width: " + width);
  console.log("current height: " + height);
  canvasWidth = width;
  canvasHeight = height;
  centerX = width/2;
  centerY = height/2;
}

function draw() {
  //background(240,20,60);
   if(mouseX > centerX){
    console.log("right");
    background(240,60,20);
  }
  else if(mouseX < centerX){
    console.log("left");
    background(50,50,50);
  }
  else if(mouseX == centerX){
    console.log("center");
    background(20,60,245);
  }
  
  mapX = map(mouseX, 0, width, -25,25);
  mapY = map(mouseY, 0, height, -25, 25);
  
  var noseColor = color(255);
  
  //eyes
  fill(255,255,255);
  ellipse(180,80,100,100);
  ellipse(320,80,100,100);
  
  //pupils
  fill(0);
  ellipse(pupilX + mapX,pupilY + mapY,40,40);
  ellipse(pupilX + 140 + mapX,pupilY + mapY,40,40);
  
  //mouth
  fill(255,255,255);
  rect(140,220,220,60,25,25,25,25);
  
  //teeth
  line(360,250,140,250);
  line(310,280,310,220);
  line(260,280,260,220);
  line(210,280,210,220);
  line(160,280,160,220);
  
  //nose
  fill(noseColor);
  ellipse(noseX,noseY,15,15);
  
}
