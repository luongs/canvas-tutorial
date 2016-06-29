"use strict"

function draw() {
  let canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    saveRestoreDraw(ctx);
  }
}

function saveRestoreDraw(ctx){
  ctx.fillRect(0, 0, 150, 150);
  ctx.save();

  ctx.fillStyle = '#09F';
  ctx.fillRect(15, 15, 120, 120);
  ctx.save();

  ctx.fillStyle = "#FFF";
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);

  ctx.restore();
  ctx.fillRect(45, 45, 60, 60);

  ctx.restore();
  ctx.fillRect(60, 60, 30, 30);
}



window.onload = function() {
  draw();
}
