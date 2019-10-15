const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200, 200), 20, true, "yellow");
let B = new Point(new Vector2d(100, 200), 20, true, "blue");
let C = new Point(new Vector2d(100, 100), 20, true, "green");
let S = new Point(new Vector2d(0,0),10,false,"blue");
let mAB = new Point(new Vector2d(0,0), 10, false, "white");
let mBC = new Point(new Vector2d(0,0), 10, false, "white");
let mCA = new Point(new Vector2d(0,0), 10, false, "white");

let mab = new LinearFunction(0,0);
let mbc = new LinearFunction(0,0);
let mca = new LinearFunction(0,0);

function animation()
{
  requestAnimationFrame(animation);

  context.clearRect(0,0,width,height);
  context.beginPath();
  context.fillStyle = "purple";
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.lineTo(C.position.dx,C.position.dy);
  context.closePath();
  context.stroke();
  context.fill();
  A.draw(context);
  B.draw(context);
  C.draw(context);
  mAB.position.dx = (A.position.dx + B.position.dx) / 2;
  mAB.position.dy = (A.position.dy + B.position.dy) / 2;
  mBC.position.dx = (B.position.dx + C.position.dx) / 2;
  mBC.position.dy = (B.position.dy + C.position.dy) / 2;
  mCA.position.dx = (A.position.dx + C.position.dx) / 2;
  mCA.position.dy = (A.position.dy + C.position.dy) / 2;
  S.position.dx = (A.position.dx + C.position.dx) / 2;
  S.position.dx = (A.position.dx + B.position.dx + C.position.dx) / 3;
  S.position.dy = (A.position.dy + B.position.dy + C.position.dy) / 3;
  mAB.draw(context);
  mBC.draw(context);
  mCA.draw(context);
  S.draw(context);
  mab.defineLineByTwoPoints(mAB, C);
  mbc.defineLineByTwoPoints(mBC,A);
  mca.defineLineByTwoPoints(mCA,B);
  mab.draw(context);
  mbc.draw(context);
  mca.draw(context);

}
animation();
