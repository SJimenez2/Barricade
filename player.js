class Player {
  height = 0
  moveY = 1;
  moveX = 0;
  total = 0;
  baricade = [];

  constructor(scale, height, startX, startY) {
    this.height = height;
    this.scale = scale;
    this.x = startX;
    this.y = startY;
    this.baricade[this.total++] = createVector(startX, startY);
  }

  show() {
    fill(255);
    for (var i = 0; i < this.baricade.length; i++) {
      fill(255);
      rect(this.baricade[i].x, this.baricade[i].y, this.scale, this.scale);
    }
  }

  update() {
    if(this.moveX != 0 || this.moveY != 0) {
      this.total++;
      this.baricade[this.baricade.length] = createVector(this.x, this.y);
      this.x = this.x + this.moveX * this.scale;
      this.y = this.y + this.moveY * this.scale;
    }
  }
}
