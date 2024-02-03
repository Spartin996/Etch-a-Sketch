/* Functions for Etch a sketch */


// create a canvas of size by size
function createCanvas(size) {
  // TODO select parent canvas
  let canvas = document.createElement('div');

  
  
  for(let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for(let r = 0; r < size; r++) {
      let cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }

  // TODO change to display
  console.log(canvas);
}


createCanvas(16);