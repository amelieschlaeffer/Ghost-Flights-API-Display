const numRows = 15;
const numCols = 5;
const canvasWidth = 1000;
const canvasHeight = 700;
const cellWidth = 1000 / numCols;
const cellHeight = 600 / numRows;

const textLabels = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  initializeTextLabels();
}


function initializeTextLabels() {
  for (let i = 0; i < numRows; i++) {
    textLabels[i] = [];
    for (let j = 0; j < numCols; j++) {
      textLabels[i][j] = `Cell ${i + 1}-${j + 1}`;
    }
  }
}

function draw() {
  background(22);

  // Draw grid lines
  stroke(0);
  strokeWeight(4);
  for (let i = 0; i <= numRows; i++) {
    const y = i * cellHeight;
    line(0, y, width, y);
  }
  for (let j = 0; j <= numCols; j++) {
    const x = j * cellWidth;
    line(x, 0, x, height);
  }

  // Draw text labels
  fill(255,240,31);
  textAlign(CENTER, TOP);
  textSize(22);
  textFont('MENLO');
 
//Draw Title
     push();
  //fill(255);
textSize(65);
textAlign(LEFT);
text('LUTON AIRPORT DEPARTURES', 30, 625);
     pop();


  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const x = j * cellWidth + cellWidth / 2;
      const y = i * cellHeight + cellHeight / 2;
      const label = textLabels[i][j];
      //text(label, x, y);
     
      
      textLabels[0][0] = 'FLIGHT';
      textLabels[0][1] = 'TIME';
      textLabels[0][2] = 'DESTINATION';
      textLabels[0][3] = 'AIRLINE ID';
      textLabels[0][4] = 'GATE';
    }
  }
}
