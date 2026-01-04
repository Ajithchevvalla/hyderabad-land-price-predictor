function predictPrice() {
  let locationPrice = Number(document.getElementById("location").value);
  let area = Number(document.getElementById("area").value);
  let roadDistance = Number(document.getElementById("roadDistance").value);
  let roadWidth = Number(document.getElementById("roadWidth").value);
  let itDistance = Number(document.getElementById("itDistance").value);
  let facilities = Number(document.getElementById("facilities").value);

  if (!area || !roadWidth || !itDistance || !facilities) {
    document.getElementById("result").innerText = "❌ Please fill all fields correctly";
    return;
  }

  let pricePerSqft = locationPrice
    + (roadWidth * 25)
    - (roadDistance * 6)
    - (itDistance * 350)
    + (facilities * 250);

  if (pricePerSqft < 3000) pricePerSqft = 3000;

  let totalPrice = pricePerSqft * area;

  document.getElementById("result").innerText =
    `Estimated Price: ₹${pricePerSqft.toFixed(0)} per sqft
Total Land Value: ₹${totalPrice.toLocaleString()}`;
}
