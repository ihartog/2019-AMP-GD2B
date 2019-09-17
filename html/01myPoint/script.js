const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

var scale = 1;


animate();

function getRandom(max)
{
  return Math.floor(Math.random()*max);
}

function animate()
{
  requestAnimationFrame(animate);
  scale += 1;
  let A = new Point(new Vector2d(getRandom(width),getRandom(height), getRandom(10)));
  A.draw(context);
}
