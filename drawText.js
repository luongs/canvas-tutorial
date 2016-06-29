"use strict"

function draw() {
  let canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    measureText(ctx);
    //strokeText(ctx);
    //fillText(ctx);
  }
}

function fillText(ctx){
  ctx.font = "48px serif";
  ctx.fillText("Hello World:", 10, 50);
}

function strokeText(ctx){
  ctx.font = "48px serif";
  ctx.strokeText("Hello World", 10, 50);
}

function measureText(ctx){
  let text = ctx.measureText("foo");
  console.log(text.width);
}

window.onload = function() {
  draw();
}
