var Hour, Minute, Second;


function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);

Hour = hour();
Minute = minute();
Second = second();

angleMode(DEGREES);

SecondAngle = map(Second, 0, 60, 0, 360);
MinuteAngle = map(Minute, 0, 60, 0, 360);
HourAngle = map(Hour%12, 0, 12, 0, 360);
push();
rotate(SecondAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(MinuteAngle);
stroke(0, 255, 0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(HourAngle);
stroke(0, 0, 255);
strokeWeight(7);
line(0,0,100,0);
pop();

strokeWeight(10);
noFill();
stroke(255,0,0);
arc(0,0,300,300,0,SecondAngle)
stroke(0,255,0);
arc(0,0,280,280,0,MinuteAngle)
stroke(0,0,255);
arc(0,0,260,260,0,HourAngle)

  drawSprites();
}