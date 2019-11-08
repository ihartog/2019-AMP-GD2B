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
wheelFront.rotation = 0;
wheelBack.rotation = 0;

car.pos = new Vector2d(0, 0);
car.vel = new Vector2d(9, 0);

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

  wheelFront.rotation += car.vel.dx / 80;
  wheelBack.rotation += car.vel.dx / 80;


  context.save();
  context.translate(wheelFront.pos.dx, wheelFront.pos.dy);
  context.rotate(wheelFront.rotation);

  context.drawImage(wheelFront, -80 , -80);

  context.restore();

  context.save();
  context.translate(wheelBack.pos.dx, wheelBack.pos.dy);
  context.rotate(wheelBack.rotation);

  context.drawImage(wheelBack, - 80, - 80);

  context.restore();

  Clamp();
}

function Clamp()
{
  if (car.pos.dx > width)
  {
    car.pos.dx = -car.width;
  }
}
