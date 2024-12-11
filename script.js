document.getElementById("generate").addEventListener("click", function () {
    
    const name = document.getElementById("name").value;
    const distance = Number(document.getElementById("distance").value);
    const ageCategory = document.getElementById("age").value;
  
    
    const pricePerKm = 0.21;
  
    
    let ticketPrice = distance * pricePerKm;
  
    
    let offer = "Biglietto Standard";
    if (ageCategory === "minor") {
      ticketPrice *= 0.8;
      offer = "Sconto Minorenne";
    } else if (ageCategory === "senior") {
      ticketPrice *= 0.6;
      offer = "Sconto Over 65";
    }
  
    
    ticketPrice = ticketPrice.toFixed(2);
  
    
    const carriage = Math.floor(Math.random() * 10) + 1;
    const code = Math.floor(Math.random() * 90000) + 10000;
  
    
    document.getElementById("passenger-name").textContent = name;
    document.getElementById("offer").textContent = offer;
    document.getElementById("carriage").textContent = carriage;
    document.getElementById("code").textContent = code;
    document.getElementById("price").textContent = ticketPrice;
  
    
    document.getElementById("ticket").classList.remove("hidden");
  });
  