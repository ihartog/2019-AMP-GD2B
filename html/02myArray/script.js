const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(random(width), random(height)),20);

point.draw(context);

console.log(random(width));

function random(max)
{
  return Math.floor( Math.random() * max);
}
