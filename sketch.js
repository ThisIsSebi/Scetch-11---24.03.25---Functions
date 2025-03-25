var ball = {
  x: 300,
  y: 400,
  xspeed: 4,
  yspeed: -3,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  displayBall();

  bounceBall();

  moveBall();

  stopBall();

}

function displayBall() {
  stroke(255, 0, 0);
  strokeWeight(10);
  noFill();
  ellipse(ball.x, ball.y, 50, 50);
}

function bounceBall() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function moveBall() {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
  
}

function stopBall() {
  if (mouseIsPressed) {
    ball.xspeed = 0;
    ball.yspeed = 0;
  }
}

function continueBall(){
  if(key === 'a'){
    ball.xspeed = 4;
    ball.yspeed = -3;
  }
}
