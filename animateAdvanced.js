"use strict"

function draw(){
  let canvas = document.getElementById('tutorial');
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');
    ball.draw(ctx);
  }
}

let ball = {
  x: 100,
  y: 100,
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


window.onload = function() {
  draw();
}
