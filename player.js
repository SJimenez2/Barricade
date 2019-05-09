class Player {
  height = 0
  moveY = 1;
  moveX = 0;

  constructor(scale, height, startX, startY) {
    this.height = height;
    this.scale = scale;
    this.x = startX;
    this.y = startY;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.scale, this.scale);
  }

  update() {
    this.x = this.x + this.moveX * this.scale;
    this.y = this.y + this.moveY * this.scale;
  }
}
