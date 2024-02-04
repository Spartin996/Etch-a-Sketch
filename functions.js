/* Functions for Etch a sketch */

// create a canvas of size by size
function createCanvas(size) {
  // select parent canvas
  let canvas = document.querySelector("#canvas");
  canvas.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let r = 0; r < size; r++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.addEventListener("mouseenter", function () {
        darkenCell(cell);
      });
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

function darkenCell(element) {
  //get the current colour of the cell
  let currentColor = element.getAttribute("style");

  let backgroundColor = "";

  if (currentColor == null) {
    backgroundColor =
      "background-color: rgba(" + generateRandomColorValue() + "0.2);";
  } else {
    // find the start and end of the opacity then get the opacity
    let pos1 = currentColor.lastIndexOf(", ") + 2;
    let pos2 = currentColor.lastIndexOf(")");
    let length = pos2 - pos1;
    let opacity = currentColor.substr(pos1, length);
    //if opacity is not 1 make it darker
    if (opacity != "1") {
      opacity = Number(opacity) + 0.2;
    }
    backgroundColor = currentColor.substr(0, pos1) + opacity + ");";
  }

  element.setAttribute("style", backgroundColor);
}

function generateRandomColorValue() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return r + ", " + g + ", " + b + ", ";
}

function startCanvas() {
  let sizeBox = document.querySelector("#size");
  let size = sizeBox.value;

  createCanvas(size);
}
