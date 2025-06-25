// variable declarations

// constants
const originalImage = []; // stores a copy of the original image

const SQUARE_SIDE = 20;

const RED = 0; // corresponds to the index of the R in RGBA
const GREEN = 1; // corresponds to the index of the G in RGBA
const BLUE = 2; // corresponds to the index of the B in RGBA
const ALPHA = 3; // corresponds to the index of the A in RGBA

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

function convertRGBAArrayToString(RGBAarray) {
  return (
    "rgba(" +
    RGBAarray[RED] +
    ", " +
    RGBAarray[GREEN] +
    ", " +
    RGBAarray[BLUE] +
    ", " +
    RGBAarray[ALPHA] +
    ")"
  );
}

function convertRGBAStringToArray(RGBAstring) {
  var RGBAarray = RGBAstring.substring(5, RGBAstring.length - 1) // removes "rgba(" and ")"
    .replace(/ /g, "") // replaces ' ' with ''
    .split(","); // splits the string into an R, G, B, and A
  for (let i = 0; i < RGBAarray.length; i++) {
    RGBAarray[i] = Number(RGBAarray[i]); // converts each string to a number
  }
  return RGBAarray;
}

function convertRGBAToHSLA(array) {
  normalize(array);
  var maximum = getMaximum(array);
  var minimum = getMinimum(array);
  var hue = limitHue(calculateHue(array, maximum, minimum));
  var lightness = calculateLightness(maximum, minimum);
  var saturation = calculateSaturation(lightness, maximum, minimum);
  array[0] = Math.round(hue);
  array[1] = Math.round(saturation * 100); // converts saturation to a percentage
  array[2] = Math.round(lightness * 100); // converts lightness to a percentage
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
  } else if (maximum === RGBAArray[0]) {
    return 60 * (((RGBAArray[1] - RGBAArray[2]) / (maximum - minimum)) % 6);
  } else if (maximum === RGBAArray[1]) {
    return 60 * ((RGBAArray[2] - RGBAArray[0]) / (maximum - minimum) + 2);
  } else if (maximum === RGBAArray[2]) {
    return 60 * ((RGBAArray[0] - RGBAArray[1]) / (maximum - minimum) + 4);
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
  RGBAArray = RGBAArray.slice(0, 3).sort().concat(RGBAArray[3]); // sorts R, G, and B from least to greatest
  return RGBAArray[2];
}

function getMinimum(RGBAArray) {
  RGBAArray = RGBAArray.slice(0, 3).sort().concat(RGBAArray[3]); // sorts R, G, and B from least to greatest
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
