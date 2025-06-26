// variable declarations

// variables
var colorModel = "RGBA";
var converted = false;
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
  applyFilter(setSaturationTo200, RED);
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
      if (colorModel === "HSLA") {
        var HSLAArray = convertHSLAStringToArray(image[i][j]);
        var array = HSLAArray;
        converted = false;
        if (
          filter === decreaseSaturation ||
          filter === decreaseSaturationBy ||
          filter === decreaseWarmth ||
          filter === increaseSaturation ||
          filter === increaseSaturationBy ||
          filter === increaseWarmth ||
          filter === setSaturationTo200
        ) {
          convertHSLAToRGBA(array);
          colorModel = "RGBA";
          converted = true;
        }
      } else if (colorModel === "RGBA") {
        var RGBAArray = convertRGBAStringToArray(image[i][j]);
        var array = RGBAArray;
        converted = false;
        if (
          filter === decreaseLightness ||
          filter === decreaseOverallSaturation ||
          filter === increaseLightness ||
          filter === increaseOverallSaturation
        ) {
          convertRGBAToHSLA(array);
          colorModel = "HSLA";
          converted = true;
        }
      }
      filter(array, color1, color2);
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAArrayToString(array);
        if (converted) {
          colorModel = "RGBA";
        }
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAArrayToString(array);
        if (converted) {
          colorModel = "HSLA";
        }
      }
    }
  }
  if (colorModel === "HSLA" && converted) {
    colorModel = "RGBA";
  } else if (colorModel === "RGBA" && converted) {
    colorModel = "HSLA";
  }
}

function applyFilterExcludeBackground(filter, color1, color2) {
  // 9
  var backgroundColor = image[0][0];
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        if (colorModel === "HSLA") {
          var HSLAArray = convertHSLAStringToArray(image[i][j]);
          var array = HSLAArray;
          converted = false;
          if (
            filter === decreaseSaturation ||
            filter === decreaseSaturationBy ||
            filter === decreaseWarmth ||
            filter === increaseSaturation ||
            filter === increaseSaturationBy ||
            filter === increaseWarmth ||
            filter === setSaturationTo200
          ) {
            convertHSLAToRGBA(array);
            colorModel = "RGBA";
            converted = true;
          }
        } else if (colorModel === "RGBA") {
          var RGBAArray = convertRGBAStringToArray(image[i][j]);
          var array = RGBAArray;
          converted = false;
          if (
            filter === decreaseLightness ||
            filter === decreaseOverallSaturation ||
            filter === increaseLightness ||
            filter === increaseOverallSaturation
          ) {
            convertRGBAToHSLA(array);
            colorModel = "HSLA";
            converted = true;
          }
        }
        filter(array, color1, color2);
        if (colorModel === "HSLA") {
          image[i][j] = convertHSLAArrayToString(array);
          if (converted) {
            colorModel = "RGBA";
          }
        } else if (colorModel === "RGBA") {
          image[i][j] = convertRGBAArrayToString(array);
          if (converted) {
            colorModel = "HSLA";
          }
        }
      }
    }
  }
  if (colorModel === "HSLA" && converted) {
    colorModel = "RGBA";
  } else if (colorModel === "RGBA" && converted) {
    colorModel = "HSLA";
  }
}

function decreaseLightness(HSLAArray, color1, color2) {
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] - 15);
}

function decreaseOpacity(array, color1, color2) {
  array[ALPHA] = limitOpacity(array[ALPHA] - 0.25);
}

function decreaseOverallSaturation(HSLAArray, color1, color) {
  HSLAArray[SATURATION] = limitOverallSaturation(HSLAArray[SATURATION] - 25);
}

function decreaseSaturation(RGBAArray, color1, color2) {
  // 7 and 8
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - 15);
}

function decreaseSaturationBy(RGBAArray, color1, color2) {
  // decreases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - RGBAArray[color2]);
}

function decreaseWarmth(RGBAArray, color1, color2) {
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] - 15);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] + 25);
}

function increaseLightness(HSLAArray, color1, color2) {
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] + 15);
}

function increaseOpacity(array, color1, color2) {
  array[ALPHA] = limitOpacity(array[ALPHA] + 0.25);
}

function increaseOverallSaturation(HSLAArray, color1, color) {
  HSLAArray[SATURATION] = limitOverallSaturation(HSLAArray[SATURATION] + 15);
}

function increaseSaturation(RGBAArray, color1, color2) {
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + 15);
}

function increaseSaturationBy(RGBAArray, color1, color2) {
  // 7 and 8: increases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + RGBAArray[color2]);
}

function increaseWarmth(RGBAArray, color1, color2) {
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] + 25);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] - 15);
}

function limitLightness(lightness) {
  return lightness < 0 ? 0 : lightness > 100 ? 100 : lightness;
}

function limitOpacity(opacity) {
  return opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
}

function limitOverallSaturation(overallSaturation) {
  return overallSaturation < 0
    ? 0
    : overallSaturation > 100
    ? 100
    : overallSaturation;
}

function limitSaturation(saturation) {
  // 6
  return saturation < 0 ? 0 : saturation > 255 ? 255 : saturation;
}

function setSaturationTo200(RGBAArray, color1, color2) {
  // 4
  RGBAArray[color1] = 200;
}
