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
