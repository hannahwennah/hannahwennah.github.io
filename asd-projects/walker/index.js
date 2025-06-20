$(document).ready(runProgram); // calls the function runProgram once the page loads
function runProgram() {
  // variable declarations

  // constants
  const FRAMES_PER_SECOND = 60;
  const MILLISECONDS_PER_FRAME = 1000 / FRAMES_PER_SECOND;

  // variables
  var walker1 = {
    height: $("#walker1").height(),
    speedX: 0,
    speedY: 0,
    width: $("#walker1").width(),
    x: 0,
    y: 0
  };
  var walker2 = {
    height: $("#walker2").height(),
    speedX: 0,
    speedY: 0,
    width: $("#walker2").width(),
    x: $("#board").width() - $("#walker2").width(),
    y: $("#board").height() - $("#walker2").height()
  };

  // setup
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  $("#walker1").on("click", function () {
    changeColor(this);
  });
  $("#walker2").on("click", function () {
    changeColor(this);
  });

  var interval = setInterval(makeNewFrame, MILLISECONDS_PER_FRAME);

  // function definitions

  function handleKeyDown(event) {
    if (event.key === "a") {
      walker1.speedX -= 5;
    } else if (event.key === "w") {
      walker1.speedY -= 5;
    } else if (event.key === "d") {
      walker1.speedX += 5;
    } else if (event.key === "s") {
      walker1.speedY += 5;
    } else if (event.key === "ArrowLeft") {
      walker2.speedX -= 5;
    } else if (event.key === "ArrowUp") {
      walker2.speedY -= 5;
    } else if (event.key === "ArrowRight") {
      walker2.speedX += 5;
    } else if (event.key === "ArrowDown") {
      walker2.speedY += 5;
    }
  }

  function handleKeyUp(event) {
    if (event.key === "a" || event.key === "d") {
      walker1.speedX = 0;
    } else if (event.key === "w" || event.key === "s") {
      walker1.speedY = 0;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      walker2.speedX = 0;
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      walker2.speedY = 0;
    }
  }

  function makeNewFrame() {
    repositionGameItem(); // updates the x and y data of both walkers
    redrawGameItem(); // redraws both walkers
  }

  // helper function definitions

  function changeColor(walker) {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $(walker).css("background-color", randomColor);
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function redrawGameItem() {
    $("#walker1").css("left", walker1.x).css("top", walker1.y);
    $("#walker2").css("left", walker2.x).css("top", walker2.y);
  }

  function repositionGameItem() {
    walker1.x += walker1.speedX;
    walker1.y += walker1.speedY;
    walker2.x += walker2.speedX;
    walker2.y += walker2.speedY;
    wallCollision();
  }
  // review rubric
  function wallCollision() {
    if (walker1.x < 0) {
      walker1.x = 0;
    }
    if (walker1.x > $("#board").width() - walker1.width) {
      walker1.x = $("#board").width() - walker1.width;
    }
    if (walker1.y < 0) {
      walker1.y = 0;
    }
    if (walker1.y > $("#board").height() - walker1.height) {
      walker1.y = $("#board").height() - walker1.height;
    }
    if (walker2.x < 0) {
      walker2.x = 0;
    }
    if (walker2.x > $("#board").width() - walker2.width) {
      walker2.x = $("#board").width() - walker2.width;
    }
    if (walker2.y < 0) {
      walker2.y = 0;
    }
    if (walker2.y > $("#board").height() - walker2.height) {
      walker2.y = $("#board").height() - walker2.height;
    }
  }
}