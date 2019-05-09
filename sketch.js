var height;

function setup() {
	boardDimensions();
  createCanvas(height, height);
}

function draw() {
	background(0);
	fill(51);
	rect(height * 0.025, height * 0.025, board, board);
}

function boardDimensions() {
  height = windowHeight * 3 / 4;
  boarder = height * 0.025
  board = height - boarder - boarder;
  scale = board / 30;
}
