$(document).ready(runProgram); // calls the function runProgram once the page loads
function runProgram() {
  // variable declarations

  // constants
  const FRAMES_PER_SECOND = 60;
  const MILLISECONDS_PER_FRAME = 1000 / FRAMES_PER_SECOND;

  // variables
  var walkers = [
    {
      side: $("#walker1").height(),
      speedX: 0,
      speedY: 0,
      x: 0,
      y: 0,
    },
    {
      side: $("#walker2").height(),
      speedX: 0,
      speedY: 0,
      x: $("#board").width() - $("#walker2").width(),
      y: $("#board").height() - $("#walker2").height(),
    },
  ];

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
    repositionWalker();
    remakeWalker();
  }

  // helper function definitions

  function changeColor(walker) {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $(walker).css("background-color", randomColor);
  }

  function endGame() {
    clearInterval(interval); // stop the interval timer
    $(document).off(); // turn off event handlers
  }

  function remakeWalker() {
    $("#walker1").css("left", walkers[0].x).css("top", walkers[0].y);
    $("#walker2").css("left", walkers[1].x).css("top", walkers[1].y);
  }

  function repositionWalker() {
    for (i = 0; i < walkers.length; i++) {
      walkers[i].x += walkers[i].speedX;
      walkers[i].y += walkers[i].speedY;
      hitWall(i);
    }
  }

  function hitWall(i) {
    if (walkers[i].x < 0) {
      walkers[i].x = 0;
    }
    if (walkers[i].x > $("#board").width() - walkers[i].side) {
      walkers[i].x = $("#board").width() - walkers[i].side;
    }
    if (walkers[i].y < 0) {
      walkers[i].y = 0;
    }
    if (walkers[i].y > $("#board").height() - walkers[i].side) {
      walkers[i].y = $("#board").height() - walkers[i].side;
    }
  }
}
