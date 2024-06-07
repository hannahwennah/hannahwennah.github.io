$(function () {
  // initializes the canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      // starts the game
      setInterval(main, 1000 / frameRate);
    }
    // creates walls
    createPlatform(-50, -50, canvas.width + 100, 50); // top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); // right
    createPlatform(-50, -50, 50, canvas.height + 500); // bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // left
    // creates a grid
    /*
    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }
    */
    // todo #1: create platforms
    // example usage: createPlatform(x, y, width, height);
    createPlatform(1150, 150, 25, 10);
    createPlatform(475, 250, 425, 10);
    createPlatform(125, 375, 175, 10);
    createPlatform(500, 500, 200, 10);
    createPlatform(1050, 575, 350, 10);
    createPlatform(0, 625, 400, 10);
    // todo #2: create collectables
    // example usage: createCollectable(type, x, y, gravity, bounce);
    createCollectable("star", 1141, 75, 0);
    createCollectable("star", 550, 175, 0);
    createCollectable("star", 625, 175, 0);
    createCollectable("star", 700, 175, 0);
    createCollectable("star", 775, 175, 0);
    createCollectable("star", 150, 300, 0);
    createCollectable("star", 225, 300, 0);
    createCollectable("star", 475, 425, 0);
    createCollectable("star", 850, 450, 0);
    createCollectable("star", 390, 475, 0);
    createCollectable("star", 925, 475, 0);
    createCollectable("star", 1000, 500, 0);
    createCollectable("star", 1075, 500, 0);
    createCollectable("star", 1150, 500, 0);
    createCollectable("star", 325, 550, 0);
    createCollectable("star", 25, 675, 0);
    createCollectable("star", 100, 675, 0);
    createCollectable("star", 175, 675, 0);
    createCollectable("star", 250, 675, 0);
    createCollectable("star", 325, 675, 0);
    createCollectable("star", 1025, 675, 0);
    createCollectable("star", 1100, 675, 0);
    createCollectable("star", 1175, 675, 0);
    createCollectable("star", 1250, 675, 0);
    createCollectable("star", 1325, 675, 0);
    // todo #3: create cannons
    // example usage: createCannon(side, position, delay, width, height);
    createCannon("right", 225, 1500);
    createCannon("right", 400, 1750);
    createCannon("right", 575, 1500);
    createCannon("right", 750, 2250);
  }
  registerSetup(setup);
});