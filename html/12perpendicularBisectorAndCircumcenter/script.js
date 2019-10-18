const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,true,"yellow");
let B = new Point(new Vector2d(800,300),20,true,"blue");
let C = new Point(new Vector2d(400,500),20,true,"red");
let S = new Point(new Vector2d(0,0),10,false,"white");
let mAB = new Point(new Vector2d(0,0),10,false,"white");
let mBC = new Point(new Vector2d(0,0),10,false,"white");
let mAC = new Point(new Vector2d(0,0),10,false,"white");

A.drag();
B.drag();
C.drag();

let ab = new LinearFunction(0,0);
let bc = new LinearFunction(0,0);
let ac = new LinearFunction(0,0);
let lab = new LinearFunction(0,0);
let lbc = new LinearFunction(0,0);
let lac = new LinearFunction(0,0);


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  S.position.dx = lab.intersection(lbc).x;
  S.position.dy = lab.intersection(lbc).y;

  let dSA = {};
  dSA.dx = S.position.dx - A.position.dx;
  dSA.dy = S.position.dy - A.position.dy;

  dSA.r = Math.sqrt(dSA.dx * dSA.dx + dSA.dy * dSA.dy);

  context.beginPath();
  context.arc(S.position.dx,S.position.dy,dSA.r,0, Math.PI * 2);
  context.closePath();
  context.stroke();



  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
  ab.defineLineByTwoPoints(B,C);
  bc.defineLineByTwoPoints(B,A);
  ac.defineLineByTwoPoints(A,C);

 ab.draw(context);
 bc.draw(context);
 ac.draw(context);

 mAB.position.dx = (A.position.dx + B.position.dx) / 2;
 mAB.position.dy = (A.position.dy + B.position.dy) / 2;

 mBC.position.dx = (B.position.dx + C.position.dx) / 2;
 mBC.position.dy = (B.position.dy + C.position.dy) / 2;

 mAC.position.dx = (A.position.dx + C.position.dx) / 2;
 mAC.position.dy = (A.position.dy + C.position.dy) / 2;

 lab.slope = -1 / bc.slope;
 lab.intercept = mAB.position.dy - lab.slope * mAB.position.dx;

 lbc.slope = -1 / ab.slope;
 lbc.intercept = mBC.position.dy - lbc.slope * mBC.position.dx;

 lac.slope = -1 / ac.slope;
 lac.intercept = mAC.position.dy - lac.slope * mAC.position.dx;

 mAB.draw(context);
 mBC.draw(context);
 mAC.draw(context);
 lab.draw(context,"green");
 lbc.draw(context,"blue");
 lac.draw(context,"red");

}

animate();
