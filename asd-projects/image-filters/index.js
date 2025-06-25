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
      var RGBAarray = convertRGBAStringToArray(image[i][j]);
      filter(RGBAarray, color1, color2);
      image[i][j] = convertRGBAArrayToString(RGBAarray);
    }
  }
}

function applyFilterExcludeBackground(filter, color1, color2) {
  // 9
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var RGBAArray = convertRGBAStringToArray(image[i][j]);
        filter(RGBAArray, color1, color2);
        image[i][j] = convertRGBAArrayToString(RGBAArray);
      }
    }
  }
}

function decreaseLightness(RGBAArray, color1, color2) {
  for (let i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = limitSaturation(RGBAArray[i] - 25);
  }
}

function decreaseOpacity(RGBAArray, color1, color2) {
  RGBAArray[ALPHA] = limitOpacity(RGBAArray[ALPHA] - 0.25);
}

function decreaseSaturation(RGBAArray, color1, color2) {
  // 7 and 8
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - 25);
}

function decreaseSaturationBy(RGBAArray, color1, color2) {
  // decreases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - RGBAArray[color2]);
}

function decreaseWarmth(RGBAArray, color1, color2) {
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] - 15);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] + 25);
}

function increaseLightness(RGBAArray, color1, color2) {
  for (let i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = limitSaturation(RGBAArray[i] + 25);
  }
}

function increaseOpacity(RGBAArray, color1, color2) {
  RGBAArray[ALPHA] = limitOpacity(RGBAArray[ALPHA] + 0.25);
}

function increaseSaturation(RGBAArray, color1, color2) {
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + 25);
}

function increaseSaturationBy(RGBAArray, color1, color2) {
  // 7 and 8: increases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + RGBAArray[color2]);
}

function increaseWarmth(RGBAArray, color1, color2) {
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] + 25);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] - 15);
}

function limitOpacity(opacity) {
  return opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
}

function limitSaturation(saturation) {
  // 6
  return saturation < 0 ? 0 : saturation > 255 ? 255 : saturation;
}

function setSaturationTo200(RGBAArray, color1, color2) {
  // 4
  RGBAArray[color1] = 200;
}
