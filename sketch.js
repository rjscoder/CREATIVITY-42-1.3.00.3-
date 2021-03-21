var hr, min, sec;
var hourangle, minuteangle, secondsangle;
var time;
var time1;
var time2;
var time3;
var globe;
var backgroundImg;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

  
}

  function preload(){
    backgroundImg= loadImage("unnamed.jpg");
  }



function draw() {
  background(backgroundImg);
                                                                     
  translate(200, 200);
  rotate(-90);
  hr = hour(); 
  min = minute();
  sec = second ();
 
  secondsangle = map(sec,0,60,0,360);
  minuteangle = map(min,0,60,0,360);
  hourangle = map(hr%12, 0, 12, 0, 360);

  //this is gif image
 //globe=createSprite(200,200,100,100);
 // globe.addImage('globe',giphy.gif);

  //this is for 1 hour complition
  time=createSprite(78, 01, 40, 04);
  time.shapecolor="white";

  //this is for 30 minutes complition
  time1=createSprite(-78, 01, 40, 04);
  time1.shapecolor="black";

  //this is for 15 minutes complition
  time2=createSprite(01, 78, 04, 40);
  time2.shapecolor="black";

  //this is for 45 minutes complition
  time3=createSprite(-01, -78, 04, 40);
  time3.shapecolor="black";
  

  //globe= loadImage("giphy.gif");

  
  

  push();
  rotate(secondsangle);
  stroke("RED");
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(minuteangle);
  stroke("ORANGE");
  strokeWeight(5);
  line(0,0,68,0);
  pop();

  push();
  rotate(hourangle);
  stroke("BLUE");
  strokeWeight(5);
  line(0,0,48,0);
  pop();

  fill("backgroundImg");

 
 //fill("transparent");

  drawSprites();
}