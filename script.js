document.getElementById("generate").addEventListener("click", function () {
    // Ottieni i valori dai campi
    const name = document.getElementById("name").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const ageCategory = document.getElementById("age").value;
  
    // Prezzo per km
    const pricePerKm = 0.21;
  
    // Calcola il prezzo base
    let ticketPrice = distance * pricePerKm;
  
    // Determina sconto
    let offer = "Biglietto Standard";
    if (ageCategory === "minor") {
      ticketPrice *= 0.8;
      offer = "Sconto Minorenne";
    } else if (ageCategory === "senior") {
      ticketPrice *= 0.6;
      offer = "Sconto Over 65";
    }
  
    // Formatta il prezzo a due decimali
    ticketPrice = ticketPrice.toFixed(2);
  
    // Genera dati casuali per carrozza e codice CP
    const carriage = Math.floor(Math.random() * 10) + 1;
    const code = Math.floor(Math.random() * 90000) + 10000;
  
    // Aggiorna il biglietto
    document.getElementById("passenger-name").textContent = name;
    document.getElementById("offer").textContent = offer;
    document.getElementById("carriage").textContent = carriage;
    document.getElementById("code").textContent = code;
    document.getElementById("price").textContent = ticketPrice;
  
    // Mostra il biglietto
    document.getElementById("ticket").classList.remove("hidden");
  });
  