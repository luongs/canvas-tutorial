
function draw() {
  var canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // strokeStyle (borders)
    drawStrokeStyle(ctx);
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


window.onload = function() {
  draw();
}
