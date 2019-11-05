const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let car = new Image();
car.src = "img/car.png";

let wheelFront = new Image();
wheelFront.src = "img/wheel.png";

let wheelBack = new Image();
wheelBack.src = "img/wheel.png";

wheelFront.pos = new Vector2d(0,0);
wheelBack.pos = new Vector2d(0,0);

car.pos = new Vector2d(0, 0);
car.vel = new Vector2d(10, 0);

car.addEventListener('load',()=>{

  car.pos.dy = height - car.height;
    animate();

})

function animate()
{
  context.clearRect(0,0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
  car.pos.Add(car.vel);
  context.drawImage(car, car.pos.dx, car.pos.dy);
  wheelFront.pos.dx = car.pos.dx;
  wheelFront.pos.dy = car.pos.dy;
  wheelBack.pos.dx = car.pos.dx;
  wheelBack.pos.dy = car.pos.dy;
  wheelFront.pos.Add(new Vector2d(673 + 80,120 + 80));
  wheelBack.pos.Add(new Vector2d(133 + 80,120 + 80));
  context.drawImage(wheelFront, wheelFront.pos.dx - 80 , wheelFront.pos.dy - 80);
  context.drawImage(wheelBack, wheelBack.pos.dx - 80, wheelBack.pos.dy - 80);
  Clamp();
}

function Clamp()
{
  if (car.pos.dx > width)
  {
    car.pos.dx = -car.width;
  }
}
