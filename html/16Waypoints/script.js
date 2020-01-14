const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

for (var i = 0; i < 5; i++) {
  points[i] = new Point(new Vector2d(GetRandom(100, 600),GetRandom(100, 600)),20,false, "black");
}

let ab = new LinearFunction(0,0);
let bc = new LinearFunction(0,0);
let cd = new LinearFunction(0,0);
let de = new LinearFunction(0,0);
let ea = new LinearFunction(0,0);

let dpoints = [];

for (var i = 0; i < 4; i++) {

let color = "";

  switch (i) {
    case 0:
color = "white";
      break;
      case 1:
        color = "blue";
        break;
        case 2:
          color = "red";
          break;
          case 3:
            color = "purple"
            break;
    default:

  }

  dpoints[i] = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,color, i);
}


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  for (var i = 0; i < points.length; i++) {
    points[i].draw(context);
  }
  ab.defineLineByTwoPoints(points[0],points[1]);
  bc.defineLineByTwoPoints(points[1],points[2]);
  cd.defineLineByTwoPoints(points[2],points[3]);
  de.defineLineByTwoPoints(points[3],points[4]);
  ea.defineLineByTwoPoints(points[4],points[0]);

  ab.draw(context);
  bc.draw(context);
  cd.draw(context);
  de.draw(context);
  ea.draw(context);

  for (var i = 0; i < dpoints.length; i++) {
    dpoints[i].draw(context);
    dpoints[i].vel.differenceVector(points[dpoints[i].target].position, dpoints[i].pos);
    dpoints[i].vel.scalarMul(0.1);
    dpoints[i].Update();

    if (dpoints[i].vel.magnitude <= 0.1) {
      dpoints[i].target++;

      if (dpoints[i].target >= points.length -1) {
        dpoints[i].target = 0;
      }
    }
  }

}

animate();

function GetRandom(min, max) {
  return Math.floor(Math.random() * max + min)
}
