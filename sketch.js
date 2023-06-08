const numRows = 15;
const numCols = 5;
const canvasWidth = 1300;
const canvasHeight = 700;
const cellWidth = 1300 / numCols;
const cellHeight = 600 / numRows;
let departures;

//const textLabels = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  loadDepartures();
}

async function loadDepartures() {
  const apiKey = '6941cf8f562d6ecc000bb95952f450ea';
  const response = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=LTN`
  );
  const data = await response.json();
  departures = data.data.filter(flight => !flight.airline.iata);
  //only displaying flights with a missing iata number, suggesting they could be ghost flights
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
  textAlign(LEFT, TOP);
  textSize(22);
  textFont('MENLO');
 
//Draw Title
     push();
 
textSize(65);
textAlign(LEFT);
text('LUTON AIRPORT DEPARTURES', 200, 625);
     pop();

// Column Titles
text('FLIGHT', 10, 20);
text('DESTINATION', 120, 20)
text('DATE / TIME', 500, 20);
text('AIRLINE ID', 870, 20);
text('GATE', 1200, 20);

     if (departures) {
      for (let i = 0; i < departures.length; i++) {
        const flight = departures[i];
        const y = 60 + i * 40;
  
        // Display flight information
        text(`${flight.flight.number}`, 10, y);
        text(`${flight.arrival.airport}`, 120, y);
        text(`${flight.departure.scheduled}`, 500, y);
        text(`${flight.airline.name}`, 870, y);
        text(`${flight.departure.gate}`, 1200, y);
       
      }
    } else {
      // Loading message
      textSize(65);
      textAlign(CENTER, CENTER);
      fill(255,240,31);
      text('Loading departures...', width / 2, height / 2);
    }
  }