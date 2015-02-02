$('document').ready(function() {
  var c = document.getElementById("canvas");
  var ctx=c.getContext("2d");

make_base();

function make_base(){
  base_image = new Image();
  base_image.src = 'abrogate.jpg';
  base_image.onload = function(){
    ctx.drawImage(base_image, 0, 0);
  }
}

canvas.onclick = function(){
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "blue";
  // Start at (0,0) and draw a 50px x 50px blue rectangle.
    ctx.fillRect(0,0,50,50);
  // Start at (0,0) and clear a 25px x 25px rectangle.
    ctx.clearRect(0,0,25,25);
  }
});