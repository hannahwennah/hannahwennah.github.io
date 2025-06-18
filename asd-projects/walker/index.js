/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects
  var walker1 = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  };
  var walker2 = {
    x: 100,
    y: 100,
    speedX: 0,
    speedY: 0
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
  $("#walker1").on("click", function () {
    changeColor(this);
  });
  $("#walker2").on("click", function () {
    changeColor(this);
  });

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      walker1.speedX -= 5;
    } else if (event.key === "ArrowUp") {
      walker1.speedY -= 5;
    } else if (event.key === "ArrowRight") {
      walker1.speedX += 5;
    } else if (event.key === "ArrowDown") {
      walker1.speedY += 5;
    } else if (event.key === "a") {
      walker2.speedX -= 5;
    } else if (event.key === "w") {
      walker2.speedY -= 5;
    } else if (event.key === "d") {
      walker2.speedX += 5;
    } else if (event.key === "s") {
      walker2.speedY += 5;
    }
  }

  function handleKeyUp(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      walker1.speedX = 0;
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      walker1.speedY = 0;
    } else if (event.key === "a" || event.key === "d") {
      walker2.speedX = 0;
    } else if (event.key === "w" || event.key === "s") {
      walker2.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

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
  }
  // review rubric
  function wallCollision() { // fix this i don't like how it works ! change snake key presses
    if (walker1.x < 0 || walker1.x + $("#walker1").width() > $("#board").width()) {
      walker1.x -= walker1.speedX;
    }
    if (walker1.y < 0 || walker1.y + $("#walker1").height() > $("#board").height()) {
      walker1.y -= walker1.speedY;
    }
    if (walker2.x < 0 || walker2.x + $("#walker2").width() > $("#board").width()) {
      walker2.x -= walker2.speedX;
    }
    if (walker2.y < 0 || walker2.y + $("#walker2").height() > $("#board").height()) {
      walker2.y -= walker2.speedY;
    }
  }
}
