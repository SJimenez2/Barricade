var p1, height;

function setup() {
	boardDimensions();
  createCanvas(height, height);
	p1 = new Player(10, height, 100, 100);
}

function draw() {
	background(0);
	fill(51);
	rect(height * 0.025, height * 0.025, board, board);
	p1.show();
	p1.update();
}

function boardDimensions() {
  height = windowHeight * 3 / 4;
  boarder = height * 0.025
  board = height - boarder - boarder;
  scale = board / 30;
}
