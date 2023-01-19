[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9699258&assignment_repo_type=AssignmentRepo)

#Programming Foundations CA

##Description

..

This repo consists of

- index.html
- lessontasks.js
- object.js
- Readme.md

In this project I have created two .js files containing all the lesson tasks for "Programming Foundations" with added notes for own learning, and a .js file with the actual course assignment.

..

##Course Assignment (.object.js)

..

Consists of two objects where properties and functions are described in the next section.

..

##Object 1 "Backpack"

..

This object has the following properties and types of data:

- brand (string), the brand of the backpack is Silva
- liters (number), the backpack holds 25 liters
- currentPrice (number), the current price for the backpack is 799NOK
- originalPrice (number), the original price for the backpack is 899NOK
- valuta (string), the valuta for the backpack is NOK
- onSale (boolean), the backpack is currently on sale
- lightWeight (undefined), we don't know if the backpack is lightweight because it is not stated in their description.
- features (array), the features stated in their desctiption is that the backpack is waterproof, flexible, breathable and reflective

..

###Description of object "Backpack" functions

- Function to add new features

```
let features = ["Waterproof", "Flexible", "Breathable", "Reflective"];

console.log(features);
```

- Adding Windproof to feature by using array.push()

```
features.push("Windproof");

console.log(features);
```

- Function to access every item in an array by using a for loop, including added feature "Windproof"

```
for (let i = 0; i < features.length; i++) {
  let fea = features[i];
  console.log(fea);
}
```

..

##Object 2 "Houseplants"

..

This object has the following properties and types of data:

- name (string), the name of the different houseplants
- price (number), what the different houseplants costs
- isPlant (boolean), some houseplants are plant-family others are in the cactus/succulent-family

  ..

###Description of object "Backpack" functions

- Looping through the array and console logging each houseplant only if it is a plant

```for (let i = 0; i < houseplants.length; i++) {
  if (houseplants[i].isPlant) {
    console.log(houseplants[i].name);
  }
}
```

- Looping through the array and logging each houseplants name if they are between the the price of 10 and 50:

```for (let i = 0; i < houseplants.length; i++) {
  if (houseplants[i].isPlant) {
    console.log(houseplants[i].name);
  }
}
```

- Accessing data within the object

`console.log(backpack.brand);`

- Accessing the objects properties and the difference between a falsy and truthy value

```
console.log(backpack.lightWeight);
// null
console.log(backpack.material);
// Undefined
```

- Checking what value null is

`console.log(typeof lightWeight);`
