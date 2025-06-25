// variable declarations

// constants
const originalImage = []; // stores a copy of the original image

const SQUARE_SIDE = 20;

const RED = 0; // corresponds to the index of the R in RGB
const GREEN = 1; // corresponds to the index of the G in RGB
const BLUE = 2; // corresponds to the index of the B in RGB

const luigi = [
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(0, 0, 0)",
    "rgb(255, 200, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(0, 0, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(0, 0, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(0, 0, 0)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(255, 200, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(0, 50, 180)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(0, 50, 180)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(0, 50, 180)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(50, 200, 50)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(50, 200, 50)",
    "rgb(0, 50, 180)",
    "rgb(255, 255, 0)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(255, 255, 0)",
    "rgb(0, 50, 180)",
    "rgb(50, 200, 50)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(255, 255, 255)",
    "rgb(255, 255, 255)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(0, 50, 180)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
  ],
  [
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(150, 150, 150)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(100, 50, 0)",
    "rgb(150, 150, 150)",
  ],
];

// variables
var image = luigi;

// function definitions

function convertRGBArrayToString(RGBarray) {
  return "rgb(" + RGBarray[RED] + ", " + RGBarray[GREEN] + ", " + RGBarray[BLUE] + ")";
}

function convertRGBStringToArray(RGBstring) {
  var RGBarray = RGBstring
    .substring(4, RGBstring.length - 1) // removes "rgb(" and ")"
    .replace(/ /g, "") // replaces ' ' with ''
    .split(","); // splits the string into an R, G, and B
  for (let i = 0; i < RGBarray.length; i++) {
    RGBarray[i] = Number(RGBarray[i]); // converts each string to a number
  }
  return RGBarray;
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
