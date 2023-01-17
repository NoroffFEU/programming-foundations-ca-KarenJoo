// * Objects backpack and houseplants

const backpack = {
  brand: "Silva",
  liters: 25,
  currentPrice: 799,
  originalPrice: 899,
  valuta: "NOK",
  onSale: true,
  isWaterProof: true,
  lightWeight: null,
  features: ["Waterproof", "Flexible", "Breathable", "Reflective"],
};

console.log(backpack);

let houseplants = [
  { name: "Pilea", price: 10.0, isPlant: true },
  { name: "Strelitzia", price: 25.0, isPlant: true },
  { name: "Cactus", price: 5.0, isPlant: false },
];

// String: brand, valuta, features, name
// Number: liters, currentPrice, originalPrice, price
// Boolean: onSale, isWaterProof, isPlant
// Array: features

// * Looping through the array and console logging each houseplant only if it is a plant * //

for (let i = 0; i < houseplants.length; i++) {
  if (houseplants[i].isPlant) {
    console.log(houseplants[i].name);
  }
}

// Looping through the array and logging each houseplants name if they are between the the price of 10 and 50

for (var i = 0; i < houseplants.length; i++) {
  let price = houseplants[i].price;
  let plantName = houseplants[i].name;

  if (price >= 10 && price <= 50) {
    console.log(plantName);
  }
}

// * Accessing data within the object * //

console.log(backpack.brand);

// accessing the objects properties and the difference between a falsy and truthy value

console.log(backpack.lightWeight);
// null
console.log(backpack.material);
// Undefined

// * Function to add new features * //

let features = ["Waterproof", "Flexible", "Breathable", "Reflective"];

console.log(features);

// add Windproof to feature by using array.push()

features.push("Windproof");

console.log(features);

// * Function to access every item in an array by using a for loop, including added feature "Windproof"

for (let i = 0; i < features.length; i++) {
  let fea = features[i];
  console.log(fea);
}
