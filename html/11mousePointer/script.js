const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let arrow = new Arrow(new Vector2d(canvas.width/2, canvas.height/2),0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0, canvas.width, canvas.height);

  arrow.angle += 0.01;
  arrow.draw(context);
}

animate();
