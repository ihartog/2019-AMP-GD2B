const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let ball, bumper;

bumper = new Point(new Vector2d(width/2, height/2),200,false, "yellow");
ball = new DPoint(new Vector2d(100,100), new Vector2d(1,1),new Vector2d(0,0) ,20,true, "red");


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  ball.Update();
  ball.vel.draw(context,ball.pos,20,"red");
  bumper.draw(context);
  ball.draw(context);
}

animate();
