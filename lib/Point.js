class Point
{
  constructor(position)
  {
    this.position = position;
  }


    draw(context)
    {
      context.beginPath();
      context.strokeStyle = "rgb(0,0,255,0.5)";
      context.fillStyle = "rgb(0,0,255,0.5)";
      context.arc(this.position.dx,this.position.dy,this.position.scale, 0, 2*Math.PI);
      context.fill();
      context.stroke();
      context.closePath();
    }
}
