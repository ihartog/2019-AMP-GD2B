class Grid {
  constructor() {

  }
  draw(context)
  {
    context.beginPath();
    context.strokeStyle = " black";
    context.moveTo(500,0);
    context.lineTo(500,800);
    context.closePath();
    context.stroke();
  }
}
