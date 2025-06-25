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
  // applyFilter(increaseSaturationBy, GREEN, BLUE);
  // applyFilter(setSaturationTo200, RED);
  // applyFilterExcludeBackground(decreaseSaturation, GREEN);
  // applyFilterExcludeBackground(setSaturationTo200, BLUE);
  render();
}

function resetAndRender() {
  reset();
  render();
}

// helper function definitions

function applyFilter(filter, color1, color2) {
  // 1, 2, 3, and 5
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      var RGBarray = convertRGBStringToArray(image[i][j]);
      filter(RGBarray, color1, color2);
      image[i][j] = convertRGBArrayToString(RGBarray);
    }
  }
}

function applyFilterExcludeBackground(filter, color1, color2) {
  // 9
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var RGBArray = convertRGBStringToArray(image[i][j]);
        filter(RGBArray, color1, color2);
        image[i][j] = convertRGBArrayToString(RGBArray);
      }
    }
  }
}

function decreaseLightness(RGBArray, color1, color2) {
  for (let i = 0; i < RGBArray.length; i++) {
    RGBArray[i] = limit(RGBArray[i] - 25);
  }
}

function decreaseSaturation(RGBArray, color1, color2) {
  // 7 and 8
  RGBArray[color1] = limit(RGBArray[color1] - 25);
}

function decreaseSaturationBy(RGBArray, color1, color2) { // decreases color1 by color2
  RGBArray[color1] = limit(RGBArray[color1] - RGBArray[color2]);
}

function decreaseWarmth(RGBArray, color1, color2) {
  RGBArray[RED] = limit(RGBArray[RED] - 15);
  RGBArray[BLUE] = limit(RGBArray[BLUE] + 25);
}

function increaseLightness(RGBArray, color1, color2) {
  for (let i = 0; i < RGBArray.length; i++) {
    RGBArray[i] = limit(RGBArray[i] + 25);
  }
}

function increaseSaturation(RGBArray, color1, color2) {
  RGBArray[color1] = limit(RGBArray[color1] + 25);
}

function increaseSaturationBy(RGBArray, color1, color2) { //
  // 7 and 8: increases color1 by color2
  RGBArray[color1] = limit(RGBArray[color1] + RGBArray[color2]);
}

function increaseWarmth(RGBArray, color1, color2) {
  RGBArray[RED] = limit(RGBArray[RED] + 25);
  RGBArray[BLUE] = limit(RGBArray[BLUE] - 15);
}

function limit(number) {
  // 6
  return number < 0 ? 0 : number > 255 ? 255 : number;
}

function setSaturationTo200(RGBArray, color1, color2) {
  // 4
  RGBArray[color1] = 200;
}
