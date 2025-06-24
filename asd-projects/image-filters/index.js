// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.

var image = luigi;

$(document).ready(function () {
  copyImage();
  render(image);
  $("#filter").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render(image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilter(reddify);
  applyFilterNoBackground(reddify);
  // do not change the below line of code
  render(image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      var pixel = image[i][j];
      var pixelArray = convertRGBStringToArray(pixel); // modify color values here later
      filterFunction(pixelArray);
      var updatedPixel = convertRGBArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixelArray = convertRGBStringToArray(image[i][j]);
        filterFunction(pixelArray);
        image[i][j] = convertRGBArrayToString(pixelArray);
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(number) {
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

// TODO 4: Create reddify filter function
function reddify(rgbArray) {
  rgbArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions

function decreaseBlue(rgbArray) {
  rgbArray[BLUE] = keepInBounds(rgbArray[BLUE] - 50);
}

function increaseGreenByBlue(rgbArray) {
  rgbArray[GREEN] = keepInBounds(rgbArray[GREEN] + rgbArray[BLUE]);
}

// CHALLENGE code goes below here
