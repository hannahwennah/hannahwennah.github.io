$(document).ready(runProgram); // calls the function runProgram once the page loads
function runProgram() {
  // variable declarations

  // constants
  const FRAMES_PER_SECOND = 60;
  const MILLISECONDS_PER_FRAME = 1000 / FRAMES_PER_SECOND;

  // variables
  var walkers = [{
    height: $("#walker1").height(),
    speedX: 0,
    speedY: 0,
    width: $("#walker1").width(),
    x: 0,
    y: 0
  }, {
    height: $("#walker2").height(),
    speedX: 0,
    speedY: 0,
    width: $("#walker2").width(),
    x: $("#board").width() - $("#walker2").width(),
    y: $("#board").height() - $("#walker2").height()
  }];
  /*
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

  */
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
      walkers[0].speedX -= 5;
    } else if (event.key === "w") {
      walkers[0].speedY -= 5;
    } else if (event.key === "d") {
      walkers[0].speedX += 5;
    } else if (event.key === "s") {
      walkers[0].speedY += 5;
    } else if (event.key === "ArrowLeft") {
      walkers[1].speedX -= 5;
    } else if (event.key === "ArrowUp") {
      walkers[1].speedY -= 5;
    } else if (event.key === "ArrowRight") {
      walkers[1].speedX += 5;
    } else if (event.key === "ArrowDown") {
      walkers[1].speedY += 5;
    }
  }

  function handleKeyUp(event) {
    if (event.key === "a" || event.key === "d") {
      walkers[0].speedX = 0;
    } else if (event.key === "w" || event.key === "s") {
      walkers[0].speedY = 0;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      walkers[1].speedX = 0;
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      walkers[1].speedY = 0;
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
    $("#walker1").css("left", walkers[0].x).css("top", walkers[0].y);
    $("#walker2").css("left", walkers[1].x).css("top", walkers[1].y);
  }

  function repositionGameItem() {
    walkers[0].x += walkers[0].speedX;
    walkers[0].y += walkers[0].speedY;
    walkers[1].x += walkers[1].speedX;
    walkers[1].y += walkers[1].speedY;
    wallCollision();
  }
  // review rubric
  function wallCollision() {
    if (walkers[0].x < 0) {
      walkers[0].x = 0;
    }
    if (walkers[0].x > $("#board").width() - walkers[0].width) {
      walkers[0].x = $("#board").width() - walkers[0].width;
    }
    if (walkers[0].y < 0) {
      walkers[0].y = 0;
    }
    if (walkers[0].y > $("#board").height() - walkers[0].height) {
      walkers[0].y = $("#board").height() - walkers[0].height;
    }
    if (walkers[1].x < 0) {
      walkers[1].x = 0;
    }
    if (walkers[1].x > $("#board").width() - walkers[1].width) {
      walkers[1].x = $("#board").width() - walkers[1].width;
    }
    if (walkers[1].y < 0) {
      walkers[1].y = 0;
    }
    if (walkers[1].y > $("#board").height() - walkers[1].height) {
      walkers[1].y = $("#board").height() - walkers[1].height;
    }
  }
}