document.getElementById("generate").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const ageCategory = document.getElementById("age").value;
  
    // Price for km
    const pricePerKm = 0.21;
  
    // ticket price
    let ticketPrice = distance * pricePerKm;
  
    //discount
    let offer = "standard";
    if (ageCategory === "minor") {
      ticketPrice *= 0.8;
      offer = "underAge Discount";
    } else if (ageCategory === "senior") {
      ticketPrice *= 0.6;
      offer = "Over 65 Discount";
    }
  
    ticketPrice = ticketPrice.toFixed(2);

    console.log("Offer:", offer);
    console.log("price ticket", ticketPrice);
  });
  