
function draw() {
  var canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    drawFill(ctx);
    //drawShadow(ctx);
    //drawPattern(ctx);
    //drawRadialGradient(ctx);
    //drawLinearGradient(ctx);
    //drawRgba(ctx);
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

  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

  // assign gradients to fill and stroke styles
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // draw shapes
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);
}

// Draw radial gradiant
function drawRadialGradient(ctx){
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255,1, 136, 0)');

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(228, 199, 0, 0)');

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);

}

function drawPattern(ctx){

  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function() {
    // create pattern
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);
  }
}

function drawShadow(ctx){
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Hello World", 5, 30);
}

function drawFill(ctx){
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI*2, true);
  ctx.arc(50, 50, 15, 0, Math.PI*2, true);
  ctx.fill("evenodd");

}

window.onload = function() {
  draw();
}
