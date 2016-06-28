
function draw() {
  var canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    drawRgba(ctx);
    // strokeStyle (borders)
    //drawStrokeStyle(ctx);
    // fillStyle eg
    //drawFillStyle(ctx);

  }
}

function drawFillStyle(ctx){
  for (var i = 0; i<6; i++){
    for (var j=0; j<6; j++){
      ctx.fillStyle = 'rgb('+Math.floor(255-42.5*i)+ ','+Math.floor(255-42.5*j) + ', 0)';
      ctx.fillRect(j*25, i*25, 25,25);
    }
  }
}

// Draw border
function drawStrokeStyle(ctx){
  for (var i=0; i<6; i++ ){
    for (var j=0; j<6; j++){
      ctx.strokeStyle = 'rgb(0,'+Math.floor(255-42.5*i) +','+
                        Math.floor(255-42.5*j)+')';
      ctx.beginPath();
      ctx.arc(12.5+j*25, 12.5+i*25, 10, 0, Math.PI*2, true);
      ctx.stroke();
    }
  }
}


// Draw semi-transparent shapes
function drawRgba(ctx){
  // Draw background
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0,0,150,37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0,37.5,150,37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0,75,150,37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0,112.5,150,37.5);

  // Draw semi transparent rectangles
  for (var i=0; i<10; i++){
    ctx.fillStyle = 'rgba(255, 255, 255,'+(i+1)/10+')';
      for (var j=0; j<4; j++){
        ctx.fillRect(5+i*14, 5+j*37.5, 14, 27.5);
      }
  }
}

// Draw gradient
function drawLinearGradient(ctx){

}

window.onload = function() {
  draw();
}
