// variable declarations

// variables
var colorModel = "RGBA";
var converted = false; // tracks whether a conversion happened
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
  applyFilter(invert);
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
          filter === decreaseContrast ||
          filter === decreaseSaturation ||
          filter === decreaseSaturationBy ||
          filter === decreaseWarmth ||
          filter === increaseContrast ||
          filter === increaseSaturation ||
          filter === increaseSaturationBy ||
          filter === increaseWarmth ||
          filter === invert ||
          filter === setSaturationTo200
        ) {
          // checks whether the parameter filter needs the RGBA color model
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
          filter === increaseOverallSaturation ||
          filter === makeGrayscale ||
          filter === makeMore
        ) {
          // checks whether the parameter filter needs the HSLA color model
          convertRGBAToHSLA(array);
          colorModel = "HSLA";
          converted = true;
        }
      }
      filter(array, color1, color2);
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAArrayToString(array);
        if (converted) {
          colorModel = "RGBA"; // resets to the RGBA color model, so the next pixel will be converted
        }
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAArrayToString(array);
        if (converted) {
          colorModel = "HSLA"; // resets to the HSLA color model, so the next pixel will be converted
        }
      }
    }
  }
  if (colorModel === "HSLA" && converted) {
    colorModel = "RGBA"; // corrects the reset on line 78
  } else if (colorModel === "RGBA" && converted) {
    colorModel = "HSLA"; // corrects the reset on line 73
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
            filter === decreaseContrast ||
            filter === decreaseSaturation ||
            filter === decreaseSaturationBy ||
            filter === decreaseWarmth ||
            filter === increaseContrast ||
            filter === increaseSaturation ||
            filter === increaseSaturationBy ||
            filter === increaseWarmth ||
            filter === invert ||
            filter === setSaturationTo200
          ) {
            // checks whether the parameter filter needs the RGBA color model
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
            filter === increaseOverallSaturation ||
            filter === makeGrayscale ||
            filter === makeMore
          ) {
            // checks whether the parameter filter needs the HSLA color model
            convertRGBAToHSLA(array);
            colorModel = "HSLA";
            converted = true;
          }
        }
        filter(array, color1, color2);
        if (colorModel === "HSLA") {
          image[i][j] = convertHSLAArrayToString(array);
          if (converted) {
            colorModel = "RGBA"; // resets to the RGBA color model, so the next pixel will be converted
          }
        } else if (colorModel === "RGBA") {
          image[i][j] = convertRGBAArrayToString(array);
          if (converted) {
            colorModel = "HSLA"; // resets to the HSLA color model, so the next pixel will be converted
          }
        }
      }
    }
  }
  if (colorModel === "HSLA" && converted) {
    colorModel = "RGBA"; // corrects the reset on line 78
  } else if (colorModel === "RGBA" && converted) {
    colorModel = "HSLA"; // corrects the reset on line 73
  }
}

function decreaseContrast(RGBAArray, color1, color2) {
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] - (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
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

function increaseContrast(RGBAArray, color1, color2) {
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] + (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
  }
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

function invert(RGBAArray, color1, color2) {
  for (i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = 255 - RGBAArray[i];
  }
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

function makeGrayscale(HSLAArray, color1, color2) {
  HSLAArray[SATURATION] = 0;
}

function makeMore(HSLAArray, color1, color2) {
  if (color1 === "red") {
    HSLAArray[HUE] = 0;
  } else if (color1 === "orange") {
    HSLAArray[HUE] = 25;
  } else if (color1 === "yellow") {
    HSLAArray[HUE] = 50;
  } else if (color1 === "green") {
    HSLAArray[HUE] = 120;
  } else if (color1 === "blue") {
    HSLAArray[HUE] = 240;
  } else if (color1 === "purple") {
    HSLAArray[HUE] = 275;
  } else if (color1 === "pink") {
    HSLAArray[HUE] = 325;
  }
}

function setSaturationTo200(RGBAArray, color1, color2) {
  // 4
  RGBAArray[color1] = 200;
}

/*
function smudge(array, color1, color2) {

  // needs to take a direction and array
  // if smudging to the right you'd blend w/ the pixel to the left
  // so aside from the first column
  // average the r g and b of each pixel w/ the pixel to its left
}
