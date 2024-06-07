$(function () {
  // initialize canvas and context when able to
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
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /*
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */
    for (let i = 100; i < canvas.width; i += 100) {
      createPlatform(i, canvas.height, -1, -canvas.height);
    }
    for (let i = 100; i < canvas.height; i += 100) {
      createPlatform(canvas.width, i, -canvas.width, -1);
    }
    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height); change height later
    createPlatform(1150, 150, 25, 10);
    createPlatform(475, 250, 425, 10);
    createPlatform(125, 375, 175, 10);
    createPlatform(500, 500, 200, 10);
    createPlatform(1050, 575, 350, 10);
    createPlatform(0, 625, 400, 10);
    // TODO 2
    // Create collectables, at least 3
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce) - gravity how fast collectable accelerates downward, bounce strength (how hard object bounces, set to 1 to bounce back to same height)
    createCollectable("star", 550, 175, 0);
    createCollectable("star", 625, 175, 0);
    createCollectable("star", 700, 175, 0);
    createCollectable("star", 775, 175, 0);
    createCollectable("star", 150, 300, 0);
    createCollectable("star", 225, 300, 0);
    createCollectable("star", 475, 425, 0);
    createCollectable("star", 700, 425, 0);
    createCollectable("star", 775, 435, 0);
    createCollectable("star", 850, 450, 0);
    createCollectable("star", 390, 475, 0);
    createCollectable("star", 925, 470, 0);
    createCollectable("star", 1000, 495, 0);
    createCollectable("star", 1075, 500, 0);
    createCollectable("star", 325, 550, 0);
    createCollectable("star", 25, 675, 0);
    createCollectable("star", 100, 675, 0);
    createCollectable("star", 175, 675, 0);
    createCollectable("star", 250, 675, 0);
    createCollectable("star", 325, 675, 0);
    // TODO 3
    // Create cannons, at least 3
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    // position is how far along the side
    // createCannon("top", 200, 2000);
    // createCannon("top", 400, 1000);
    // createCannon("top", 600, 750);
    //requirements - playable but challenging, , must change height to get some collectables0
    //git add -A
    //git commit -m 'add platformer.js file'
    //git push

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
