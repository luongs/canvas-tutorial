
function draw() {
  var canvas = document.getElementById('tutorial');
  // Use if browser supports
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    fillText(ctx);
  }
}

function fillText(ctx){
  ctx.font = "48px serif";
  ctx.fillText("Hello World:", 10, 50);
}

window.onload = function() {
  draw();
}
