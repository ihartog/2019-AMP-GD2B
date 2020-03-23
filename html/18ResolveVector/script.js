const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),20,true,"red");
let B = new Point(new Vector2d(300,200),20,true,"blue");
let C = new Point(new Vector2d(100,200),10,true,"purple");

let ab = new LinearFunction(0,0);
let ac = new LinearFunction(0,0);

let vector = new Vector2d(1,1);
let vector2 = new Vector2d(1,1);
let tan = new Vector2d(1,1);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  vector.dx = B.position.dx - A.position.dx;
  vector.dy = B.position.dy - A.position.dy;

  vector2.dx = C.position.dx - A.position.dx;
  vector2.dy = C.position.dy - A.position.dy;

  tan.dx = -vector2.dy;
  tan.dy = vector2.dx;

  tan.magnitude = 1;
  vector2.magnitude = 1;

  vector2.magnitude = vector.dot(vector2);
  tan.magnitude = vector.dot(tan);

  A.draw(context);
  B.draw(context);
  C.draw(context);

  ab.defineLineByTwoPoints(A,B);
  ac.defineLineByTwoPoints(A,C);

  ab.draw(context);
  ac.draw(context);

  vector.draw(context, A.position, vector.angle, "red");
  vector2.draw(context, A.position, vector.angle, "red");
  tan.draw(context, A.position, tan.angle);
}

animate();
