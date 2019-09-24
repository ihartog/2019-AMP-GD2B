class Point
{
  constructor(position, radius)
  {
    this.position = position;
    this.radius = radius;
  }


    draw(context)
    {
      context.beginPath();
      context.strokeStyle = "rgb(0,0,255,0.5)";
      context.fillStyle = "rgb(0,0,255,0.5)";
      context.arc(this.position.dx,this.position.dy,this.radius, 0, 2*Math.PI);
      context.fill();
      context.stroke();
      context.closePath();
    }
}
