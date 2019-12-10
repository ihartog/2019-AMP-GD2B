const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,300),20,true, "purple");
let B = new Point(new Vector2d(300,200),20,true, "black");

let ab = new LinearFunction(0,0);

let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"white");

let toB = false;

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  A.draw(context);
  B.draw(context);
  ab.defineLineByTwoPoints(A,B);
  point.draw(context);
  ab.draw(context);

  if (toB) {
  point.vel.differenceVector(B.position, point.pos);
  console.log(point.vel.magnitude);
  }

  if (point.vel.magnitude < 1) {
  //  toB = false;
  }

  else {
    point.vel.differenceVector(A.position, point.pos);
  }

  point.vel.scalarMul(0.01);
  point.Update();

}

animate();
