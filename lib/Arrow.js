class Arrow {
  constructor(pos, angle) {

    this.pos = pos;
    this.angle = angle || 0;

  }

  draw(context)
  {
  let shaftHeight = 10;
  let shaftLenght = 100;
  let headHeight = 30;
  let headLenght = 15;

  context.save();
  context.translate(this.pos.dx, this.pos.dy);
  context.beginPath();
  context.moveTo(0,0);
//  context.moveTo(window.innerWidth/2,window.innerHeight/2);
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
