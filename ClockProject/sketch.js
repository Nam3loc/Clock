function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  //fill(255);
  //noStroke();
  //text (hr + ':' + min + ':' + sec, 0, 0);

  stroke(255);
  point(0,0);
  
  strokeWeight(4);
  noFill();

  stroke(255, 100, 150);
  let secAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);
  push();
  rotate(secAngle);
  line(0, 0, 50, 0);
  pop();

  stroke(150, 100, 255);
  let minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);
  push();
  rotate(minAngle);
  line(0, 0, 75, 0);
  pop();

  stroke(150, 255, 100);
  let hrAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  push();
  rotate(hrAngle);
  line(0, 0, 100, 0);
  pop();

}
