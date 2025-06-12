// variable declarations

var key; // tracks which key the user pressed last
var updateInterval;

// constant variables
var columns = 18;
var rows = 18;
var squareLength = 20;

// jQuery objects
var board = $("#board");
var scoreElement = $("#score");
var highScoreElement = $("#highScore");

// 4A: variables
var apple = {};
var score = 0;
var snake = {};

// setup
$("body").on("keydown", handleKeyDown);
start(); // starts the game

// function definitions

function start() {
  snake.body = []; // 4C
  makeCheckerboard();
  makeSnakeSquare(10, 10); // 4C
  snake.head = snake.body[0]; // 4C
  makeApple(); // 4B-2
  score = 0;
  scoreElement.text("score: 0");
  updateInterval = setInterval(update, 100); // 5A
}

function update() { // 5B
  moveSnake();
  if (hitApple()) {
    handleAppleHit();
  }
  if (hitSnake() || hitWall()) {
    end();
  }
}

function end() {
  clearInterval(updateInterval); // ends the function update
  board.empty(); // clears the board
  highScoreElement.text("high score: " + calculateHighScore());
  setTimeout(start, 1000); // restarts the game after 1 second
}

function checkForNewDirection(event) { // 6B
  if (key === 37 || key === 65) { // checks whether the user pressed the left arrow key or a
    snake.head.direction = "left";
  } else if (key === 38 || key === 87) { // checks whether the user pressed the up arrow key or w
    snake.head.direction = "up";
  } else if (key === 39 || key === 68) { // checks whether the user pressed the right arrow key or d
    snake.head.direction = "right";
  } else if (key === 40 || key === 83) { // checks whether the user pressed the down arrow key or s
    snake.head.direction = "down";
  }
}

function handleAppleHit() {
  score++;
  scoreElement.text("score: " + score);
  apple.element.remove();
  makeApple();

  // teleports the snake to a random position
  // var randomPosition = getRandomAvailablePosition();
  // snake.head.column = randomPosition.column;
  // snake.head.row = randomPosition.row;

  var column = 0; // 11
  var row = 0; // 11
  if (snake.tail.direction === "left") { // 11
    column = snake.tail.column + 1;
    row = snake.tail.row;
  } else if (snake.tail.direction === "up") { // 11
    column = snake.tail.column;
    row = snake.tail.row + 1;
  } else if (snake.tail.direction === "right") { // 11
    column = snake.tail.column - 1;
    row = snake.tail.row;
  } else if (snake.tail.direction === "down") { // 11
    column = snake.tail.column;
    row = snake.tail.row - 1;
  }
  makeSnakeSquare(column, row); // 11
}

function hitApple() { // 9
  if (snake.head.column === apple.column && snake.head.row === apple.row) {
    return true;
  }
  return false;
}

function hitSnake() { // 12
  for (i = 1; i < snake.body.length; i++) {
    var snakeSquare = snake.body[i];
    if (snake.head.column === snakeSquare.column && snake.head.row === snakeSquare.row) {
      return true;
    }
  }
  return false;
}

function hitWall() { // 8
  if (snake.head.column < 0 || snake.head.column > columns || snake.head.row < 0 || snake.head.row > rows) {
    return true;
  }
  return false;
}

function moveSnake() {
  for (i = snake.body.length - 1; i > 0; i--) { // 11: causes each snake square to assume the properties of the preceding one
    var snakeSquare = snake.body[i];
    var precedingSnakeSquare = snake.body[i - 1];
    var precedingColumn = precedingSnakeSquare.column;
    var precedingDirection = precedingSnakeSquare.direction;
    var precedingRow = precedingSnakeSquare.row;
    snakeSquare.column = precedingColumn;
    snakeSquare.direction = precedingDirection;
    snakeSquare.row = precedingRow;
    reposition(snakeSquare);
  }
  checkForNewDirection();
  if (snake.head.direction === "left") { // 7
    snake.head.column--;
  } else if (snake.head.direction === "up") { // 7
    snake.head.row--;
  } else if (snake.head.direction === "right") { // 7
    snake.head.column++;
  } else if (snake.head.direction === "down") { // 7
    snake.head.row++;
  }
  reposition(snake.head);
}

// helper function definitions

function calculateHighScore() {
  var highScore = sessionStorage.getItem("highScore") || 0;
  if (score > highScore) {
    sessionStorage.setItem("highScore", score);
    highScore = score;
  }
  return highScore;
}

function getRandomAvailablePosition() {
  var positionAvailable;
  var randomPosition = {};
  while (!positionAvailable) {
    randomPosition.column = Math.floor(Math.random() * columns);
    randomPosition.row = Math.floor(Math.random() * rows);
    positionAvailable = true;
    for (i = 0; i < snake.body.length; i++) { // 13
      var snakeSquare = snake.body[i];
      if (randomPosition.column === snakeSquare.column && randomPosition.row === snakeSquare.row) {
        positionAvailable = false;
      }
    }
  }
  return randomPosition;
}

function handleKeyDown(event) { // 6A
  key = event.which;
}

function makeApple() { // 4B-1
  apple.element = $("<div>").addClass("apple").appendTo(board);
  var randomPosition = getRandomAvailablePosition();
  apple.column = randomPosition.column;
  apple.row = randomPosition.row;
  reposition(apple);
}

function makeCheckerboard() {
  for (i = 0; i <= 18; i += 2) {
    for (j = 1; j < 18; j += 2) {
      var checkerboard = {};
      checkerboard.element = $("<div>").addClass("checkerboard").appendTo(board);
      checkerboard.column = i;
      checkerboard.row = j;
      reposition(checkerboard);
    }
  }
  for (i = 1; i < 18; i += 2) {
    for (j = 0; j <= 18; j += 2) {
      var checkerboard = {};
      checkerboard.element = $("<div>").addClass("checkerboard").appendTo(board);
      checkerboard.column = i;
      checkerboard.row = j;
      reposition(checkerboard);
    }
  }
}

function makeSnakeSquare(column, row) { // 4C-1
  var snakeSquare = {};
  snakeSquare.element = $("<div>").addClass("snake").appendTo(board);
  snakeSquare.column = column;
  snakeSquare.row = row;
  reposition(snakeSquare);
  snake.body.push(snakeSquare);
  if (snake.body.length === 1) { // checks whether this snake square is the head
    snakeSquare.element.attr("id", "snake-head");
  }
  snake.tail = snakeSquare;
}

function reposition(square) {
  square.element.css("left", square.column * squareLength);
  square.element.css("top", square.row * squareLength);
}