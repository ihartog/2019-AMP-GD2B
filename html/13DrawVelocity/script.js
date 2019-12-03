const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new DPoint(new Vector2d(200,200), new Vector2d(7,8), new Vector2d(0.5,0.5), 30, "purple");


function animate()
{
  context.clearRect(0,0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  point.Update();
  point.draw(context);
  point.vel.draw(context,point.pos);
  console.log(point.vel.angle)

}

animate();
