"use strict"

let raf;  // RequestAnimationFrame
function draw(){
  let canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');
    drawMovingBall(ctx, canvas);
  }
}

let ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function drawMovingBall(ctx, canvas){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx);
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Add boundary detection
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0){
    ball.vx = -ball.vx;
  }
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0){
    ball.vy = -ball.vy;
  }
  raf = window.requestAnimationFrame(draw);
}


window.onload = function() {
  raf = window.requestAnimationFrame(draw);
}
