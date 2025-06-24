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

function render(image) {
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

function rgbStringToArray(rgbStr) {
  var rgbArr = rgbStr
    .substring(4, rgbStr.length - 1) // remove "rgb(" and ")"
    .replace(/ /g, "") // replace ' ' with ''
    .split(","); // separate into Array

  rgbArr[RED] = Number(rgbArr[RED]); // turns "150" into 150 as a number and stores it in rgbArr[0]
  rgbArr[GREEN] = Number(rgbArr[GREEN]);
  rgbArr[BLUE] = Number(rgbArr[BLUE]);
  return rgbArr;
}

// this function converts an array into an RGB string
function rgbArrayToString(rgbArray) {
  return (
    "rgb(" + rgbArray[RED] + "," + rgbArray[GREEN] + "," + rgbArray[BLUE] + ")"
  );
}

// this function will reset the image data back to its original values
function reset() {
  // copy the image data into the og variable
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      image[i][j] = originalImage[i][j];
    }
  }
}

// main code
// copy the image data into the og variable
for (var i = 0; i < image.length; i++) {
  // iterates through each row in the image
  let t = []; // makes a new array
  for (var j = 0; j < image[i].length; j++) {
    t.push(image[i][j]); // pushes each element in a row into that array
  }
  originalImage.push(t); // pushes the array into the new one
  // you can't just go element by element since each row is a diff array
}
