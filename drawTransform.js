"use strict"

function draw() {
  let canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    rotate(ctx);
    //translate(ctx);
    //saveRestoreDraw(ctx);
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

// translate changes the center point
function translate(ctx){
  for (let i= 0; i<3; i++){
    for (let j=0; j<3; j++){
      //Saving initial position of canvas makes for easier positioning
      ctx.save();
      ctx.fillStyle = 'rgb('+ (51*i)+ ','+ (255- 51*i)+ ', 255)';
      ctx.translate(10+ j*50, 10+ i*50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}

// Angles are in radians converting to degree = (Math.PI/180)*degrees
function rotate(ctx){
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate(( Math.PI/180)* 25);

  // grey rect
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rect center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80);
  ctx.rotate((Math.PI/180)* 25);
  ctx.translate(-200, -80);

  // draw grey rect
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(150, 30, 100, 100);
}



window.onload = function() {
  draw();
}
