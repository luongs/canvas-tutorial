
function draw() {
  var canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // fillStyle eg
    drawFillStyle(ctx);
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

function draw2dCircle(ctx){
  var circle = new Path2D();
  circle.moveTo(125,35);
  circle.arc(100,35,25,0,2*Math.PI);
  ctx.fill(circle);
}

function drawSmiley(ctx){
  ctx.beginPath();
  ctx.arc(75,75,50,0, Math.PI*2, true);
  ctx.moveTo(110,75);
  ctx.arc(75,75,35, 0, Math.PI, false);
  ctx.moveTo(65,65);
  ctx.arc(60,65,5,0,Math.PI*2, true);
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0,Math.PI*2, true);
  ctx.stroke();
}

function drawTriangle(ctx){
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}

function drawOverlappedRect(ctx){
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10,10,50,50);

    ctx.fillStyle = "rgba(0,0,200,0.5)";
    ctx.fillRect(30,30,50,50);

}

window.onload = function() {
  draw();
}
