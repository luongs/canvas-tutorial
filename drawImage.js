"use strict"

function draw() {
  let canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    tilingImg(ctx);
    //drawLineGraph(ctx);
  }
}

// Example shows how to draw on top of images
function drawLineGraph(ctx){
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };

  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}

// Scaling and tiling images. Tiling will repeat images several times
function tilingImg(ctx){
  let img = new Image();
  img.onload = function(){
    for (let i=0; i<10; i++){
      for (let j=0; j<9; j++){
        ctx.drawImage(img, j*55, i*38, 50, 37);
      }
    }
  };

  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
}


window.onload = function() {
  draw();
}
