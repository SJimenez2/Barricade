class Player {
  height = 0
  moveX = 0;
  moveY = 0;
  score = 0;
  dead = false;
  total = 0;
  barricade = [];

  constructor(scale, height, startX, startY) {
    this.height = height;
    this.scale = scale;
    this.x = startX;
    this.y = startY;
    this.barricade[this.total++] = createVector(startX, startY);
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score++;
  }

  update() {
    if (!this.dead && (this.moveX != 0 || this.moveY != 0)) {
      this.total++;
      this.barricade[this.barricade.length] = createVector(this.x, this.y);
      this.x = this.x + this.moveX * this.scale;
      this.y = this.y + this.moveY * this.scale;
    }
  }

  show() {
    for (var i = 0; i < this.barricade.length; i++) {
      if (i == this.barricade.length - 1 && this.dead) {
        fill(255, 0, 0);
      } else {
        fill(255);
      }
      rect(this.barricade[i].x, this.barricade[i].y, this.scale, this.scale);
    }
  }

  direction(x, y) {
    this.moveX = x;
    this.moveY = y;
  }

  isdead() {
    return this.dead;
  }

  kill() {
    if (this.x > this.height || this.y > this.height || this.x < 1 || this.y < 1) {
      this.barricade[this.barricade.length] = createVector(this.x, this.y);
      this.dead = true;
      this.direction(0, 0);
      return true;
    }
    return false;
  }
}
