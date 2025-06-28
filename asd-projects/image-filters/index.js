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
  applyFilterExcludeBackground(smudge, undefined, undefined, "down");
  render();
}

function resetAndRender() {
  reset();
  render();
}

// helper function definitions

function applyFilter(filter, color1, color2, direction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAStringToArray(image[i][j]);
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
          convertHSLAToRGBA(image[i][j]);
          if (i === image.length - 1 && j === image[i].length - 1) {
            colorModel = "RGBA";
          }
        }
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAStringToArray(image[i][j]);
        if (
          filter === decreaseLightness ||
          filter === decreaseOverallSaturation ||
          filter === increaseLightness ||
          filter === increaseOverallSaturation ||
          filter === makeGrayscale ||
          filter === makeMore
        ) {
          convertRGBAToHSLA(image[i][j]);
          if (i === image.length - 1 && j === image[i].length - 1) {
            colorModel = "HSLA";
          }
        }
      }
    }
  }
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (filter !== smudge) {
        filter(image[i][j], color1, color2);
      } else {
        smudge(image[i][j], direction, i, j);
      }
    }
  }
  // negative indices return undefined
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAArrayToString(image[i][j]);
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAArrayToString(image[i][j]);
      }
    }
  }
}
/*

function applyFilter(filter, color1, color2) { // (direction); then change apply filter w/o background
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
      filter(array, color1, color2); // (array1, array2, array3, array4, array5, color1, color2, direction, i, j) 
      // array2 and array 3 needs to be converted back to an array
      // array4 amd array5 need to be converted to the right color model as an array
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
*/

function applyFilterExcludeBackground(filter, color1, color2, direction) {
  // 9
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAStringToArray(image[i][j]);
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
          convertHSLAToRGBA(image[i][j]);
          if (i === image.length - 1 && j === image[i].length - 1) {
            colorModel = "RGBA";
          }
        }
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAStringToArray(image[i][j]);
        if (
          filter === decreaseLightness ||
          filter === decreaseOverallSaturation ||
          filter === increaseLightness ||
          filter === increaseOverallSaturation ||
          filter === makeGrayscale ||
          filter === makeMore
        ) {
          convertRGBAToHSLA(image[i][j]);
          if (i === image.length - 1 && j === image[i].length - 1) {
            colorModel = "HSLA";
          }
        }
      }
    }
  }
  if (colorModel === "HSLA") {
    for (let i = 0; i < image.length; i++) {
      var backgroundColor = convertHSLAArrayToString(image[0][0]);
      for (let j = 0; j < image[i].length; j++) {
        if (convertHSLAArrayToString(image[i][j]) !== backgroundColor) {
          if (filter !== smudge) {
            filter(image[i][j], color1, color2);
          } else {
            smudge(image[i][j], direction, i, j);
          }
        }
      }
    }
  } else if (colorModel === "RGBA") {
    for (let i = 0; i < image.length; i++) {
      var backgroundColor = convertRGBAArrayToString(image[0][0]);
      for (let j = 0; j < image[i].length; j++) {
        if (convertRGBAArrayToString(image[i][j]) !== backgroundColor) {
          if (filter !== smudge) {
            filter(image[i][j], color1, color2);
          } else {
            smudge(image[i][j], direction, i, j);
          }
        }
      }
    }
  }
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (colorModel === "HSLA") {
        image[i][j] = convertHSLAArrayToString(image[i][j]);
      } else if (colorModel === "RGBA") {
        image[i][j] = convertRGBAArrayToString(image[i][j]);
      }
    }
  }
}

function decreaseContrast(RGBAArray, color1, color2) {
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (let i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] - (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
  }
}

function decreaseLightness(HSLAArray, color1, color2) {
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] - 15);
}

function decreaseOpacity(array, color1, color2) {
  array[ALPHA] = limitOpacity(array[ALPHA] - 0.25);
}

function decreaseOverallSaturation(HSLAArray, color1, color2) {
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
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (let i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] + (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
  }
}

function increaseLightness(HSLAArray, color1, color2) {
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] + 15);
}

function increaseOpacity(array, color1, color2) {
  array[ALPHA] = limitOpacity(array[ALPHA] + 0.25);
}

function increaseOverallSaturation(HSLAArray, color1, color2) {
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
  for (let i = 0; i < RGBAArray.length - 1; i++) {
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
  //
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

function smudge(array, direction, i, j) {
  if (direction === "left" && j !== image[i].length - 1) {
    for (let k = 0; k < array.length - 1; k++) {
      array[k] = (array[k] + image[i][j + 1][k]) / 2; // average values w/ pixel to its right
    }
  } else if (direction === "up" && i !== image.length - 1) {
    for (let k = 0; k < array.length - 1; k++) {
      array[k] = (array[k] + image[i + 1][j][k]) / 2;
    }
  } else if (direction === "right" && j !== 0) {
    // not first in row
    for (let k = 0; k < array.length - 1; k++) {
      array[k] = (array[k] + image[i][j - 1][k]) / 2; // average values w/ pixel to its left
    }
  } else if (direction === "down" && i !== 0) {
    for (let k = 0; k < array.length - 1; k++) {
      array[k] = (array[k] + image[i - 1][j][k]) / 2;
    }
  }
}

/*
In a real blur filter, you can't modify pixels as you loop — because each pixel’s new value depends on the original image.

💡 To do this correctly:

Create a second 2D array to store the blurred version of the image
Use nested loops to calculate the average RGB values of a pixel’s neighbors
Store that result in the new array
After finishing all calculations, copy the new array back to image
*/

function blur(array, i, j) {
  
}