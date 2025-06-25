// variable declarations

// variables
var image = luigi;

// setup

$(document).ready(function () {
  copy();
  render();
  $("#filter").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

// function definitions

function applyAndRender() {
  applyFilter(GREEN, increaseBy, BLUE);
  applyFilter(RED, setTo200);
  applyFilterExcludeBackground(GREEN, decrease);
  applyFilterExcludeBackground(BLUE, setTo200);
  render();
}

function resetAndRender() {
  reset();
  render();
}

// helper function definitions

function applyFilter(color1, filter, color2) {
  // 1, 2, 3, and 5
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      var RGBarray = convertRGBStringToArray(image[i][j]);
      filter(color1, RGBarray, color2);
      image[i][j] = convertRGBArrayToString(RGBarray);
    }
  }
}

function applyFilterExcludeBackground(color1, filter, color2) {
  // 9
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var RGBArray = convertRGBStringToArray(image[i][j]);
        filter(color1, RGBArray, color2);
        image[i][j] = convertRGBArrayToString(RGBArray);
      }
    }
  }
}

function decrease(color1, RGBArray, color2) {
  // 7 and 8
  RGBArray[color1] = limit(RGBArray[color1] - 50);
}

function decreaseBy(color1, RGBArray, color2) { // decreases color1 by color2
  RGBArray[color1] = limit(RGBArray[color1] - RGBArray[color2]);
}

function increase(color1, RGBArray, color2) {
  RGBArray[color1] = limit(RGBArray[color1] + 50);
}

function increaseBy(color1, RGBArray, color2) { //
  // 7 and 8: increases color1 by color2
  RGBArray[color1] = limit(RGBArray[color1] + RGBArray[color2]);
}

function limit(number) {
  // 6
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

function setTo200(color1, RGBArray, color2) {
  // 4
  RGBArray[color1] = 200;
}
