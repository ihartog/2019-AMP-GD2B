const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let ball, bumper, distance;

bumper = new Point(new Vector2d(width/2, height/2),200,false, "yellow");
ball = new DPoint(new Vector2d(10,10), new Vector2d(10,10),new Vector2d(0,0) ,20,true, "red");
//ball.radius = new Vector2d(1,1);
ball.rad = new Vector2d(1,1);
ball.tan = new Vector2d(1,1)

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  ball.Update();
  ball.rad.dx = bumper.position.dx - ball.pos.dx;
  ball.rad.dy = bumper.position.dy - ball.pos.dy;

distance = ball.rad.magnitude;

console.log(distance);

  ball.tan.dx = -ball.rad.dy;
  ball.tan.dy = ball.rad.dx;

  ball.rad.magnitude = 1;
  ball.tan.magnitude = 1;

  ball.rad.magnitude = ball.rad.dot(ball.vel);
  ball.tan.magnitude = ball.tan.dot(ball.vel);

  if (distance < bumper.radius + ball.radius) {
    ball.rad.magnitude = -ball.rad.magnitude;
    ball.vel.sumVector(ball.rad,ball.tan);
  }

  bumper.draw(context);
  ball.draw(context);
  ball.vel.draw(context,ball.pos,20,"blue");
  ball.rad.draw(context,ball.pos,20,"red");
  ball.tan.draw(context,ball.pos,20,"green");
}

animate();
