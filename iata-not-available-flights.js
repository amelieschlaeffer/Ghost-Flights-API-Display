let departures;

function setup() {
  createCanvas(800, 800);
  loadDepartures();
}

async function loadDepartures() {
  const apiKey = 'f0c94dedbd05aa248d8683103a61c3f8';
  const fromDate = '2022-05-01';
  const toDate = '2022-05-31';
  const response = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=LTN&flight_date_from=${fromDate}&flight_date_to=${toDate}`
  );
  const data = await response.json();
  departures = data.data.filter(flight => !flight.airline.iata);
}

function draw() {
  background(220);

  if (departures) {
    for (let i = 0; i < departures.length; i++) {
      const flight = departures[i];
      const y = 50 + i * 80;

      // Display flight information
      textSize(8);
      textAlign(LEFT, TOP);
      fill(0);
      text(`Flight: ${flight.flight.number}`, 20, y);
      text(`Destination: ${flight.arrival.airport}`, 20, y + 25);
      text(`Date: ${flight.flight_date}`, 20, y + 50);
      //text(`Gate: ${flight.departure.gate}`, 20, y + 100);
    }
  } else {
    // Loading message
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
    text('Loading departures...', width / 2, height / 2);
  }
}
