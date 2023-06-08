let departures;

function setup() {
  createCanvas(1000, 400);
  loadDepartures();
}

async function loadDepartures() {
  const apiKey = 'f0c94dedbd05aa248d8683103a61c3f8';
  const response = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=LHR`
  );
  const data = await response.json();
  departures = data.data;
}

function draw() {
  background(220);

  if (departures) {
    for (let i = 0; i < 5; i++) {
      const flight = departures[i];
      const y = 50 + i * 100;

      // Display flight information
      textSize(16);
      textAlign(LEFT, TOP);
      fill(0);
      text(`Flight: ${flight.flight.number}`, 20, y);
      text(`Destination: ${flight.arrival.airport}`, 20 + 100, y);
      text(`Scheduled Departure: ${flight.departure.estimated}`, 20 + 300, y);
      text(`Airline: ${flight.airline.name}`, 20 + 750, y);
     

    }
  } else {
    // Loading message
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
    text('Loading departures...', width / 2, height / 2);
  }
}