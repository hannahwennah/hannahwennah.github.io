// variable declarations

// constant variables
var squareLength = 20;

// jQuery objects
var highScoreElement = $("#highScore");
var scoreElement = $("#score");
var board = $("#board");

// 4A: variables
var apple = {};
var appleColor;
var columns = 18;
var flag;
var key; // tracks which key the user pressed last
var rows = 18;
var score = 0;
var snake = {};
var snakeColor;
var snakeHeadColor;
var teleportMode = false;
var updateInterval;

// setup
$("body").on("keydown", handleKeyDown);

$("#small").on("click", function () {
  $("#board").css("height", "260").css("width", "260");
  columns = 12;
  rows = 12;
  end();
});
$("#medium").on("click", function () {
  $("#board").css("height", "380").css("width", "380");
  columns = 18;
  rows = 18;
  end();
});
$("#large").on("click", function () {
  $("#board").css("height", "500").css("width", "500");
  columns = 24;
  rows = 24;
  end();
});

$("#apple").on("click", function () {
  changeAppleColor(this.id);
});
$("#blueberry").on("click", function () {
  changeAppleColor(this.id);
});
$("#cherry").on("click", function () {
  changeAppleColor(this.id);
});
$("#orange").on("click", function () {
  changeAppleColor(this.id);
});
$("#plum").on("click", function () {
  changeAppleColor(this.id);
});

$("#normal-mode").on("click", function () {
  teleportMode = false;
});
$("#teleport-mode").on("click", function () {
  teleportMode = true;
});

$("#black").on("click", function () {
  changeSnakeColor(this.id);
});
$("#blue").on("click", function () {
  changeSnakeColor(this.id);
});
$("#brown").on("click", function () {
  changeSnakeColor(this.id);
});
$("#purple").on("click", function () {
  changeSnakeColor(this.id);
});

start(); // starts the game

// function definitions

function start() {
  flag = false;
  snake.body = []; // 4C
  makeCheckerboard();
  makeApple(); // 4B-2
  makeSnakeSquare(columns / 2, rows / 2); // 4C
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
  if (flag === false) {
    clearInterval(updateInterval); // ends the function update
    board.empty(); // clears the board
    apple = {};
    flag = true;
    highScoreElement.text("high score: " + calculateHighScore());
    score = 0;
    scoreElement.text("score: 0");
    snake = {};
    setTimeout(start, 1000); // restarts the game after 1 second
  }
}

function checkForNewDirection(event) { // 6B
  if (key === 37 || key === 65) {
    // checks whether the user pressed the left arrow key or a
    snake.head.direction = "left";
  } else if (key === 38 || key === 87) {
    // checks whether the user pressed the up arrow key or w
    snake.head.direction = "up";
  } else if (key === 39 || key === 68) {
    // checks whether the user pressed the right arrow key or d
    snake.head.direction = "right";
  } else if (key === 40 || key === 83) {
    // checks whether the user pressed the down arrow key or s
    snake.head.direction = "down";
  }
}

function handleAppleHit() {
  apple.element.remove();
  makeApple();
  score++;
  scoreElement.text("score: " + score);
  if (teleportMode) {
    var randomPosition = getRandomAvailablePosition();
    snake.head.column = randomPosition.column;
    snake.head.row = randomPosition.row;
  }
  var column, row // 11
  if (snake.tail.direction === "left") {
    // 11
    column = snake.tail.column + 1;
    row = snake.tail.row;
  } else if (snake.tail.direction === "up") {
    // 11
    column = snake.tail.column;
    row = snake.tail.row + 1;
  } else if (snake.tail.direction === "right") {
    // 11
    column = snake.tail.column - 1;
    row = snake.tail.row;
  } else if (snake.tail.direction === "down") {
    // 11
    column = snake.tail.column;
    row = snake.tail.row - 1;
  }
  makeSnakeSquare(column, row); // 11
}

function hitApple() {
  // 9
  if (snake.head.column === apple.column && snake.head.row === apple.row) {
    return true;
  }
  return false;
}

function hitSnake() {
  // 12
  for (i = 1; i < snake.body.length; i++) {
    var snakeSquare = snake.body[i];
    if (
      snake.head.column === snakeSquare.column &&
      snake.head.row === snakeSquare.row
    ) {
      return true;
    }
  }
  return false;
}

function hitWall() {
  // 8
  if (
    snake.head.column < 0 ||
    snake.head.column > columns ||
    snake.head.row < 0 ||
    snake.head.row > rows
  ) {
    return true;
  }
  return false;
}

function moveSnake() {
  for (i = snake.body.length - 1; i > 0; i--) {
    // 11: causes each snake square to assume the properties of the preceding one
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
  if (snake.head.direction === "left") {
    // 7
    snake.head.column--;
  } else if (snake.head.direction === "up") {
    // 7
    snake.head.row--;
  } else if (snake.head.direction === "right") {
    // 7
    snake.head.column++;
  } else if (snake.head.direction === "down") {
    // 7
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

function changeAppleColor(fruit) {
  if (fruit === "apple") {
    appleColor = "#d92926";
  } else if (fruit === "blueberry") {
    appleColor = "#646bb4";
  } else if (fruit === "cherry") {
    appleColor = "#a50d33";
  } else if (fruit === "orange") {
    appleColor = "#fa7f38";
  } else if (fruit === "plum") {
    appleColor = "#95508f";
  }
  $(".apple").css("background-color", appleColor);
}

function changeSnakeColor(color) {
  if (color === "black") {
    snakeColor = "#404040";
    snakeHeadColor = "#000000";
  } else if (color === "blue") {
    snakeColor = "#9caee2";
    snakeHeadColor = "#889ddd";
  } else if (color === "brown") {
    snakeColor = "#d3a17b";
    snakeHeadColor = "#cc9266";
  } else if (color === "purple") {
    snakeColor = "#c7adeb";
    snakeHeadColor = "#b299e6";
  }
  $(".snake").css("background-color", snakeColor);
  $("#snake-head").css("background-color", snakeHeadColor);
}

function getRandomAvailablePosition() {
  var positionAvailable;
  var randomPosition = {};
  while (!positionAvailable) {
    randomPosition.column = Math.floor(Math.random() * columns);
    randomPosition.row = Math.floor(Math.random() * rows);
    positionAvailable = true;
    for (i = 0; i < snake.body.length; i++) {
      // 13
      var snakeSquare = snake.body[i];
      if (
        randomPosition.column === snakeSquare.column &&
        randomPosition.row === snakeSquare.row
      ) {
        positionAvailable = false;
      }
    }
  }
  return randomPosition;
}

function handleKeyDown(event) {
  // 6A
  key = event.which;
}

function makeApple() {
  // 4B-1
  apple.element = $("<div>").addClass("apple").css("background-color", appleColor).appendTo(board);
  var randomPosition = getRandomAvailablePosition();
  apple.column = randomPosition.column;
  apple.row = randomPosition.row;
  reposition(apple);
}

function makeCheckerboard() {
  for (i = 0; i <= columns; i += 2) {
    for (j = 1; j < rows; j += 2) {
      var checkerboard = {};
      checkerboard.element = $("<div>")
        .addClass("checkerboard")
        .appendTo(board);
      checkerboard.column = i;
      checkerboard.row = j;
      reposition(checkerboard);
    }
  }
  for (i = 1; i < columns; i += 2) {
    for (j = 0; j <= rows; j += 2) {
      var checkerboard = {};
      checkerboard.element = $("<div>")
        .addClass("checkerboard")
        .appendTo(board);
      checkerboard.column = i;
      checkerboard.row = j;
      reposition(checkerboard);
    }
  }
}

function makeSnakeSquare(column, row) { // 4C-1
  var snakeSquare = {};
  snakeSquare.element = $("<div>").addClass("snake").appendTo(board);
  $(".snake").css("background-color", snakeColor);
  $("#snake-head").css("background-color", snakeHeadColor);
  snakeSquare.column = column;
  snakeSquare.row = row;
  reposition(snakeSquare);
  snake.body.push(snakeSquare);
  if (snake.body.length === 1) { // checks whether this snake square is the head
    snake.head = snake.body[0]; // 4C
    snakeSquare.element.attr("id", "snake-head");
    $("#snake-head").css("background-color", snakeHeadColor);
  }
  snake.tail = snakeSquare;
}

function reposition(square) {
  square.element.css("left", square.column * squareLength);
  square.element.css("top", square.row * squareLength);
}
