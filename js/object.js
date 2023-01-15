const backpack = {
  brand: "Silva",
  liters: 25,
  costs: 799,
  valuta: "NOK",
  onSale: true,
  isWaterProof: true,
  features: ["Waterproof", "Flexible", "Breathable", "Reflective"]
  };


// String: brand
// Number: liters
// Boolean: true
// Array: features
// Function:

// * Function to add new features * //

let features = ["Waterproof", "Flexible", "Breathable", "Reflective"];

console.log (features);

// add Windproof to feature by using array.push()

features.push("Windproof");

console.log(features);

// * Function to access every item in an array by using a for loop


for (let i = 0; i < features.length; i++) {
    let fea = features[i];
    console.log(fea);
}

// including added feature "Windproof"


