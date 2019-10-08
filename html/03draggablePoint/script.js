const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200, 200), 20, true, "yellow");
let B = new Point(new Vector2d(100, 200), 20, true, "blue");
let C = new Point(new Vector2d(100, 100), 20, true, "green");

function animation()
{
  requestAnimationFrame(animation);

  context.clearRect(0,0,width,height);
  grid.draw(context);
  context.beginPath();
  context.fillStyle = "rgba(30,10,5,0.5)";
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.lineTo(C.position.dx,C.position.dy);
  context.closePath();
  context.stroke();
  context.fill();
  A.draw(context);
  B.draw(context);
  C.draw(context);

}
animation();
