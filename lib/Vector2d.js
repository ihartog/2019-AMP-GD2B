class Vector2d
    {
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude()
    {
      return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    differenceVector(a,b)
    {
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    get angle()
    {
      return Math.atan2(this.dy, this.dx);
    }

    Add(vector)
    {
      this.dx += vector.dx;
      this.dy += vector.dy;
    }

    draw(context, pos)
    {
    let shaftHeight = 10;
    let shaftLenght = 100;
    let headHeight = 30;
    let headLenght = 15;

    context.save();
    context.translate(pos.dx, pos.dy);
    context.rotate(this.angle);
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(shaftLenght, -shaftHeight/2);
    context.lineTo(shaftLenght, -headHeight/2);
    context.lineTo(shaftLenght+headLenght,0);
    context.lineTo(shaftLenght, headHeight/2);
    context.lineTo(shaftLenght, shaftHeight/2);
    context.lineTo(0, shaftHeight/2);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
    }
}
