"use strict"

function draw() {
  let canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0 , 150, 150);
    ctx.translate(75, 75);

    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI*2, true);
    ctx.clip();

    // draw background
    let lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, '#232256');
    lingrad.addColorStop(1, '#143778');

    ctx.fillStyle = lingrad;
    ctx.fillRect(-75, -75, 150, 150);

    // draw stars
    for (let j=1; j<50; j++){
      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.translate(75- Math.floor(Math.random() * 150),
                    75- Math.floor(Math.random()* 150));
      drawStar(ctx, Math.floor(Math.random()* 4) +2);
      ctx.restore();
    }
  }
}

function drawStar(ctx, r){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);

  for (let i=0; i<9; i++){
    ctx.rotate(Math.PI/5);
    if (i%2 === 0){
      ctx.lineTo((r/0.525732)* 0.200811, 0);
    }
    else{
      ctx.lineTo(r, 0);
    }
  }

  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

window.onload = function() {
  draw();
}
