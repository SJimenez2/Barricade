class Player {
  height = 0
  moveX = 0;
  moveY = 0;
  score = 0;
  dead = false;
  total = 0;
  barricade = [];

  constructor(scale, height) {
    this.height = height;
    this.scale = scale;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score++;
    this.direction(0, 0);
  }

  reset(x, y){
    this.total = 0;
    this.barricade = [];
    this.x = x;
    this.y = y;
    this.moveX = 0;
    this.moveY = 0;
    this.dead = false;
    this.barricade[this.total++] = {x: x, y: y};
  }

  update() {
    if (!this.dead && (this.moveX != 0 || this.moveY != 0)) {
      this.total++;
      this.barricade[this.barricade.length] = {x: this.x, y: this.y};
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

  hitBarricade(x, y) {
    for (var i = 0; i < this.barricade.length; i++) {
      if(this.barricade[i].x == x && this.barricade[i].y == y){
        this.barricade[this.barricade.length] = {x: x, y: y};
        this.dead = true;
        this.direction(0, 0);
        return true;
      }
    }
  }

  kill() {
    if(this.moveX == 0 && this.moveY == 0){ return false;}
    if (this.x > this.height || this.y > this.height || this.x < 1 || this.y < 1) {
      this.barricade[this.barricade.length] = {x: this.x, y: this.y};
      this.dead = true;
      this.direction(0, 0);
      return true;
    }
    if(this.hitBarricade(this.x, this.y)) {
      return true;
    }

    return false;
  }
}
