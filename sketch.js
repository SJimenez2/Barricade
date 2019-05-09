var p1, p2, height, scale, board;
var restart = true;

function setup() {
  boardDimensions();
  createCanvas(height, height);
  startLocations();
  visuals();
}

function boardDimensions() {
  height = windowHeight * 3 / 4;
  boarder = height * 0.025
  board = height - boarder - boarder;
  scale = board / 30;
}

function startLocations() {
  var startX = Math.floor(Math.random() * 14) + 1;
  var startY = Math.floor(Math.random() * 14) + 1;
  p1 = new Player(scale, board, boarder + scale * startX, boarder + scale * startY);
  p2 = new Player(scale, board, boarder + scale * (30 - startX), boarder + scale * (30 - startY));
}

function draw() {
  //Not used due to wanting the jumpy aesthetic of game
  // setTimeout doesnt work since draw is already in a continuous
}

function visuals() {
  background(0);
  fill(51);
  rect(height * 0.025, height * 0.025, board, board);
  if (!p1.isdead() && !p2.isdead()) {
    p1.kill();
    p1.update();
    p2.kill();
    p2.update();
  }
  p1.show();
	p2.show();
  setTimeout(visuals, 200);
}

function keyPressed() {
  // press a key to start game
  if (restart) {
    restart = false;
    p1.direction(0, 1);
		p2.direction(0, -1);
    return;
  }

  // r key to restart
  if (keyCode === 82) {
    startLocations();
    restart = true;
  }

  // player 1
  if (keyCode === 87) {
    p1.direction(0, -1);
  } else if (keyCode === 83) {
    p1.direction(0, 1);
  } else if (keyCode === 68) {
    p1.direction(1, 0);
  } else if (keyCode === 65) {
    p1.direction(-1, 0);
  }

	// player 2
  if (keyCode === UP_ARROW) {
    p2.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    p2.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    p2.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    p2.direction(-1, 0);
  }
}
