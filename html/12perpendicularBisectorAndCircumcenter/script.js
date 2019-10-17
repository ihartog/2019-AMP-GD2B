
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
let mAB = new Point(new Vector2d(0,0), 10, false, "white");
let mBC = new Point(new Vector2d(0,0), 10, false, "white");
let mCA = new Point(new Vector2d(0,0), 10, false, "white");

A.drag();
B.drag();
C.drag();

let lab = new LinearFunction(1,1);
let lbc = new LinearFunction(1,1);
let lca = new LinearFunction(1,1);
let ab = new LinearFunction(0,0);
let bc = new LinearFunction(0,0);
let ca = new LinearFunction(0,0);


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

//  m.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  ab.defineLineByTwoPoints(B,C);
  bc.defineLineByTwoPoints(B,A);
  ca.defineLineByTwoPoints(A,C);

 ab.draw(context);

lbc.slope = -1 / bc.slope;
lbc.intercept = C.position.dy - lbc.slope * C.position.dx;

lab.slope = -1 / ab.slope;
lab.intercept = A.position.dy - lab.slope * A.position.dx;

 bc.draw(context);
 ca.draw(context);

lca.slope = -1 / ca.slope;
lca.intercept = B.position.dy - lca.slope * B.position.dx;

 lca.draw(context, "red");
 lbc.draw(context, "blue");
 lab.draw(context, "purple");

console.log(lab.intersection(lbc));
 S.position.dx = lab.intersection(lbc).x;
  S.position.dy = lab.intersection(lbc).y;

  S.draw(context);

}

animate();
