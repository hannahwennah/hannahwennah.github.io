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
  applyFilter(decreaseLightness);
  render();
}

function resetAndRender() {
  reset();
  render();
}

// helper function definitions

// overhaul to my main code
// first in apply filter
// iterate through the image and make the necessary conversions to each pixel
// so as it is rn
// if the color model is hsla
// convert hsla string to hsla array
// store hsla array in array
// and if the filter requires rgba
// convert the array to an rgba array
// on the last iteration set color model to rgba
// else if the color model is rgba
// convert the rgba string to an rgba array
// store it in array
// and if the filter requires hsla
// convert the array to an hsla array
// on the last iteration set color model to hsla
// at the end of it all, the color model should be correct and all the pixels r in array format

// then apply the filter to each element
// iterate through the image
// filter w/ all its arguments: array1 is image[i][j], array2 is the one to the left image[i][j - 1], array3 image[i - 1][j], array4 image[i][j + 1], array5 image[i + 1][j]
// negative indices return undefined

// then iterate through the image again
// and convert all pixels back to a string
// so if the color model is hsla convert hsla array to string
// and the same for rgba

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
      filter(image[i][j], color1, color2);
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
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] - (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
  }
}

function decreaseLightness(HSLAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] - 15);
}

function decreaseOpacity(array, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  array[ALPHA] = limitOpacity(array[ALPHA] - 0.25);
}

function decreaseOverallSaturation(HSLAArray, color1, color) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  HSLAArray[SATURATION] = limitOverallSaturation(HSLAArray[SATURATION] - 25);
}

function decreaseSaturation(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  // 7 and 8
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - 15);
}

function decreaseSaturationBy(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  // decreases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] - RGBAArray[color2]);
}

function decreaseWarmth(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] - 15);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] + 25);
}

function increaseContrast(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  var average = (RGBAArray[RED] + RGBAArray[GREEN] + RGBAArray[BLUE]) / 3;
  for (i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] = RGBAArray[i] + (RGBAArray[i] - average) * 0.25; // brings R, G, and B closer to the average by a fourth of the difference between each and the average
  }
}

function increaseLightness(HSLAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  HSLAArray[LIGHTNESS] = limitLightness(HSLAArray[LIGHTNESS] + 15);
}

function increaseOpacity(array, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  array[ALPHA] = limitOpacity(array[ALPHA] + 0.25);
}

function increaseOverallSaturation(HSLAArray, color1, color) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  HSLAArray[SATURATION] = limitOverallSaturation(HSLAArray[SATURATION] + 15);
}

function increaseSaturation(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + 15);
}

function increaseSaturationBy(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  // 7 and 8: increases color1 by color2
  RGBAArray[color1] = limitSaturation(RGBAArray[color1] + RGBAArray[color2]);
}

function increaseWarmth(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  RGBAArray[RED] = limitSaturation(RGBAArray[RED] + 25);
  RGBAArray[BLUE] = limitSaturation(RGBAArray[BLUE] - 15);
}

function invert(RGBAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
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
  //
  // 6
  return saturation < 0 ? 0 : saturation > 255 ? 255 : saturation;
}

function makeGrayscale(HSLAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  HSLAArray[SATURATION] = 0;
}

function makeMore(HSLAArray, color1, color2) {
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
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
  // (array1, array2, array3, array4, array5, color1, color2, direction, i, j)
  // 4
  RGBAArray[color1] = 200;
}

function smudge(
  array1,
  array2,
  array3,
  array4,
  array5,
  color1,
  color2,
  direction,
  i,
  j
) {
  // replace array 1 w/ average values of array1 and array2. array2 is the pixel left, 3 the pixel above, 4 the pixel to the right, 5 the pixel below
  // if direction is left
  // and the pixel is not the last one in its row (so j is not image[i].length - 1)
  // iterate through array1 except the last value
  // array1[k] = (array1[k] + array[4]) / 2;
  // if direction is up
  // and the pixel is not in the last row (so i is not image.length - 1)
  // iterate through array1 except the last value
  // array1[k] = array1[k] + array5[k] / 2
  // if direction is right // it won't smudge exactly the same because the pixel to the left its grabbing values from has already been changed
  // and the pixel is not the first one in its row (so j is not 0)
  // iterate through array1 except the last value
  // array1[k] = (array1[k] + array2[k] / 2);
  // if direction is down // it wont' smudge exactly the same because the pixel above its grabbing values from has already been changed
  // and the pixel is not the first row (so i is not 0)
  // iterate through array1 except the last value
  // array1[k] = array1[k] +array3[k] / 2
}
