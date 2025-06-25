// variable declarations

// constants
const originalImage = []; // stores a copy of the original image

const SQUARE_SIDE = 20;

const HUE = 0; // corresponds to the index of the H in HSLA
const SATURATION = 1; // corresponds to the index of the S in HSLA
const LIGHTNESS = 2; // corresponds to the index of the L in HSLA
const RED = 0; // corresponds to the index of the R in RGBA
const GREEN = 1; // corresponds to the index of the G in RGBA
const BLUE = 2; // corresponds to the index of the B in RGBA
const ALPHA = 3; // corresponds to the index of the A in HSLA and RGBA

const luigi = [
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(255, 200, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(50, 200, 50, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(0, 50, 180, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
  ],
  [
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(150, 150, 150, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(100, 50, 0, 1)",
    "rgba(150, 150, 150, 1)",
  ],
];

// variables
var image = luigi;

// function definitions

function convertHSLAArrayToString(HSLAArray) {
  return (
    "hsla(" +
    HSLAArray[HUE] +
    ", " +
    HSLAArray[SATURATION] +
    "%, " +
    HSLAArray[LIGHTNESS] +
    "%, " +
    HSLAArray[ALPHA] +
    ")"
  );
}

function convertHSLAStringToArray(HSLAString) {
  var HSLAArray = HSLAString.substring(5, HSLAString.length - 1) // removes "hsla(" and ")"
    .replaceAll("%", "") // replaces % with ''
    .replaceAll(" ", "") // replaces ' ' with ''
    .split(",");
  for (let i = 0; i < HSLAArray.length; i++) {
    HSLAArray[i] = Number(HSLAArray[i]); // converts each string to a number
  }
  return HSLAArray;
}

function convertRGBAArrayToString(RGBAArray) {
  return (
    "rgba(" +
    RGBAArray[RED] +
    ", " +
    RGBAArray[GREEN] +
    ", " +
    RGBAArray[BLUE] +
    ", " +
    RGBAArray[ALPHA] +
    ")"
  );
}

function convertRGBAStringToArray(RGBAString) {
  var RGBAArray = RGBAString.substring(5, RGBAString.length - 1) // removes "rgba(" and ")"
    .replaceAll(" ", "") // replaces ' ' with ''
    .split(","); // splits the string into an R, G, B, and A
  for (let i = 0; i < RGBAArray.length; i++) {
    RGBAArray[i] = Number(RGBAArray[i]); // converts each string to a number
  }
  return RGBAArray;
}

function convertRGBAToHSLA(array) {
  normalize(array);
  var maximum = getMaximum(array);
  var minimum = getMinimum(array);
  var hue = limitHue(calculateHue(array, maximum, minimum));
  var lightness = calculateLightness(maximum, minimum);
  var saturation = calculateSaturation(lightness, maximum, minimum);
  array[HUE] = Math.round(hue);
  array[SATURATION] = Math.round(saturation * 100); // converts saturation to a percentage
  array[LIGHTNESS] = Math.round(lightness * 100); // converts lightness to a percentage
}

function copy() {
  for (let i = 0; i < image.length; i++) {
    let subarray = [];
    for (let j = 0; j < image[i].length; j++) {
      subarray.push(image[i][j]);
    }
    originalImage.push(subarray); // copies over each subarray one by one
  }
}

function render() {
  $("#display").empty();
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      $("<div>")
        .appendTo("#display")
        .addClass("square")
        .css("background-color", image[i][j])
        .css("left", j * SQUARE_SIDE)
        .css("top", i * SQUARE_SIDE);
    }
  }
}

function reset() {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] = originalImage[i][j]; // copies over the original image
    }
  }
}

// helper function definitions

function calculateHue(RGBAArray, maximum, minimum) {
  if (maximum === minimum) {
    // checks whether R, G, and B are equal
    return 0;
  } else if (maximum === RGBAArray[RED]) {
    return (
      60 * (((RGBAArray[GREEN] - RGBAArray[BLUE]) / (maximum - minimum)) % 6)
    );
  } else if (maximum === RGBAArray[GREEN]) {
    return 60 * ((RGBAArray[BLUE] - RGBAArray[RED]) / (maximum - minimum) + 2);
  } else if (maximum === RGBAArray[BLUE]) {
    return 60 * ((RGBAArray[RED] - RGBAArray[GREEN]) / (maximum - minimum) + 4);
  }
}

function calculateLightness(maximum, minimum) {
  return (maximum + minimum) / 2;
}

function calculateSaturation(lightness, maximum, minimum) {
  if (maximum === minimum) {
    // checks whether R, G, and B are equal
    return 0;
  } else if (lightness < 0.5) {
    return (maximum - minimum) / (maximum + minimum);
  } else {
    return (maximum - minimum) / (2 - maximum - minimum);
  }
}

function getMaximum(RGBAArray) {
  RGBAArray = RGBAArray.slice(0, 3).sort().concat(RGBAArray[ALPHA]); // sorts R, G, and B from least to greatest
  return RGBAArray[2];
}

function getMinimum(RGBAArray) {
  RGBAArray = RGBAArray.slice(0, 3).sort().concat(RGBAArray[ALPHA]); // sorts R, G, and B from least to greatest
  return RGBAArray[0];
}

function limitHue(hue) {
  return hue < 0 ? hue + 360 : hue;
}

function normalize(RGBAArray) {
  for (let i = 0; i < RGBAArray.length - 1; i++) {
    RGBAArray[i] /= 255; // changes R, G, and B to values between 0 and 1
  }
}
