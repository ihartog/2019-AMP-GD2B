const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let bumperArray = FillBumperArray();
let ball = new DPoint(new Vector2d(100,100),new Vector2d(3,4), new Vector2d(0,0),10,"white");

function FillBumperArray()
{
  let array = [];
  let numberOfBumpers = Math.floor (height/rowHeight);
  let numberOnRow = Math.floor (width/columnWidth);
  let startColumnWidth = 50;
  let columnWidth = 100;

  let startRowHeigt = 50;
  let rowHeight = 100;



  for (var i = 0; i < numberOfBumpers; i++) {
    let x = startColumnWidth + (i % numberOnRow) * columnWidth;
    let y = startRowHeigt + (Math.floor(i/numberOnRow)) * rowHeight;
    let myBall = new Point(new Vector2d(x,y),50,false, "yellow");
  //  myBall.draw(context);
    array.push(myBall)
  }
  return array;
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  bumperArray.map(bump) => {
      bump.draw(context);
  })
  ball.Update();
  ball.draw(context);
}

animate();
