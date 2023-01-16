console.log("This is script 1");

// M O D U L E 1

var firstName = "Karen";
var lastName = "Jo";
var fullName = firstName + " " + lastName;

var nameContainer = document.querySelector("#name");

nameContainer.innerHTML = fullName;

console.log("nameContainer:", nameContainer.innerHTML);

var product1 = "Best Product";
var product2 = "Bad Product";
var product3 = "Mediocre Product";

var product1Container = document.querySelector("#productName1");
var product2Container = document.querySelector("#productName2");
var product3Container = document.querySelector("#productName3");

product1Container.innerHTML = product1;
product2Container.innerHTML = product2;
product3Container.innerHTML = product3;

// testing

var price1 = "5";
var price2 = 4;

var total = parseInt(price1) + price2;

console.log("price1: ", typeof price1);
console.log("price2: ", typeof price2);

console.log("total: ", total);

// Strings, Numbers, Booleans
// Question 1 Create two number variables, one with an integer value and one with a decimal value.

var integer = 8;
var decimal = 10.5;

//integer value
var numberValue1 = parseInt(integer);
//decimal value
var numberValue2 = parseFloat(decimal);

var result = numberValue1 + numberValue2;

console.log(result);

// Question 2 Declare and initialise a variable with all the working days of the week separated by hyphens -.

var workingDay1;
var workingDay2;
var workingDay3;
var workingDay4;
var workingDay5;

workingDay1 = "monday";
workingDay2 = "tuesday";
workingDay3 = "wednesday";
workingDay4 = "thursday";
workingDay5 = "friday";

var daysOfTheWeek =
  workingDay1 +
  "-" +
  workingDay2 +
  "-" +
  workingDay3 +
  "-" +
  workingDay4 +
  "-" +
  workingDay5;

console.log("days of the week: ", daysOfTheWeek);

// Question 3 Create four variables that demonstrate the following operations:

// addition
var result = 10 + 10;

console.log(result);

// substraction
var result = 20 - 5;

console.log(result);

// multiplication
var result = 5 * 20;

console.log(result);

// division
var result = 4 / 3;

console.log(result);

// Question 4 Declare a boolean variable with an initial value of false.

var OnSpecial = false;

console.log(OnSpecial);

// Question 5 Console log the number of characters in this string: "The frogs are angry."
var sentence = "The frogs are angry.";
var sentence = sentence.length;

console.log(sentence.length);

// Question 6 Convert the following variable names to camelCase:

// var time_elapsed;
// var totalprice;

var timeElapsed;
var totalPrice;

// Question 7 Convert the following string values to number values:

// var number1 = "53";
// var number2 = "44.6";

var number1 = 53;
var number2 = 44.6;

var convertedNumber = parseInt(number1);
var convertedNumber = parseFloat(number2);

// Question 8 Check the type of the following variables and log the results:

// string
var pet = "donkey";
// number
var age = 89;
// boolean
var discountApplied = true;
//camelCase
var timeLeft;

var typeOfPet = typeof pet;
console.log(typeOfPet);

var typeOfAge = typeof age;
console.log(typeOfAge);

var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied);

var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft);

// Question 9 Declare and initialise a variable with the value "Updating heading".

var heading = "String Variables";
var newHeading = "Updating header";
var headingContainer = document.querySelector("h1");

headingContainer.innerHTML = heading + " " + newHeading;
console.log("headingContainer: ", headingContainer.innerHTML);

// Select the h1 element on the page and set it's inner HTML value to be the variable created above.

// Question 10 Select the body element on the page and change its background colour to lightskyblue.
var body = document.querySelector("body");
body.style.backgroundColor = "white";

var myNumber = 7;
var myString = "dog";

// is myNumber greater than 8?
console.log(myNumber > 8); //false

// is myNumber less than or equal to 7?
console.log(myNumber <= 7); //true

// is myString exactly equal to "dog"?
console.log(myString === "dog"); //true

// is myString not equal to "cat"?
console.log(myString !== "cat"); //true

// logged is or not?

var isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("Logged in");
} else {
  console.log("NOT Logged in");
}

// is 80 more expensive than 60?

var total = 80;

if (total >= 60) {
  console.log("This is expensive");
} else {
  console.log("Cheap"); //this code runs if it is cheaper than
}

// Checking different grades value

var grade = 9;
var letterGrade;

if (grade === 10) {
  letterGrade = "A";
} else if (grade === 9) {
  letterGrade = "A";
} else if (grade === 8) {
  letterGrade = "B";
} else {
  letterGrade = "Unknown"; //(0-7)
}
console.log(letterGrade);

// switch

var grade = 7;
var letterGrade;

// using switch note: one bracket

var grade = 7;
var letterGrade;

switch (grade) {
  case 10:
  case 9:
    letterGrade = "A";
    break;
  //in case of grade being equal to 8, run the code after the colon : and before the break
  case 8:
    letterGrade = "B";
    break;
  case 7:
    letterGrade = "C";
    break;
  // default if none of the conditions in the case blocks is true. = else/if else
  case 6:
    letterGrade = "D";
    break;
  case 5:
    letterGrade = "E";
    break;
  default:
    letterGrade = "Fail";
}

console.log(letterGrade);

// checking assignment operator versus the comparasion operator

//assignment operator
var colour = "blue";

//comparasion operator
if (colour === "red") {
  console.log("Nice colour");
}

// Making decisions
// Question 1 Given these two variables

//var firstNumber = 34;
//var secondNumber = 89;

//write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second".

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber)
  console.log("The first number is smaller than the second");

// Question 2 Given these two variables

// var age = 11;
// var minimumAge = "13";

// write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var age = 11;
var minimumAge = "13";

// if 11 is greater than minimunage 13
if (age >= parseInt(minimumAge)) {
  console.log("Minimum age met");
  //or else the minimumage is not met, run this code
} else {
  console.log("Minimum age not met");
}

// Question 3 Given these two variables

// var income = "11.050";
// var maximumIncome = "13.075";

// write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't.

var income = "11.050";
var maximumIncome = "13.075";

//parseFloat when number is string
if (parseFloat(income) <= parseFloat(maximumIncome)) {
  console.log("Income meets the maximum requirement");
} else {
  console.log("income does not meet the maximum requirement");
}

// Question 4 Fix this code:

// var colour = "blue";

// if ((colour = "orange")) {
//console.log("This colour is a bit rubbish");
// }

var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

// Question 5 Given the following variable

// var invoicePaid = false;

// write code that logs the message "Not paid" if the invoice has not been paid.

var invoicePaid = false;

if (invoicePaid === false) {
  console.log("Not paid");
}

// Question 6 Given these two variables

// var selectedNumber = 11;
// var winningNumber = "15";

// write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator.

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
  console.log("You lose again");
}

// Question 7 Given this variable

// var dayOfTheWeek = 2;

// write a switch statement that log the weekday name depending on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".

// If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number".

var dayOfTheWeek = 11;
var weekDay;

switch (dayOfTheWeek) {
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 7:
    weekDay = "Sunday";
    break;

  default:
    weekDay = "Invalid day number";
    break;
}

console.log(weekDay);

// for loop
for (var count = 1; count <= 5; count++) {
  console.log(i);
}

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// Loops
// Question 1 Write a loop that logs the numbers 0 to 7.

//integer is less than or equal to 7
for (var count = 0; count <= 7; count++) {
  console.log(i);
}

// Question 2 Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.

i = 10;
for (var count = 10; count < 0; count--) {
  console.log(i);
}

// Question 3 Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc

for (var i = 10; i <= 20; i++) {
  // i is less than or equal to 20
  //using the reminder operator % to determine if the number is odd
  if (i % 2 !== 0) {
    // any number that returns a remainder after being divided by 2 is an odd number
    console.log(i);
  }
}

// M O D U L E 2

var firstname = "Karen";

// property
var numCharacter = firstName.length;

console.log(numCharacter);

// method
var lower = firstName.toLowerCase();

console.log(lower);

// method
var upper = firstName.toUpperCase();

console.log(upper);

// lowercase uppercase

if ("Harry" !== "harry") {
  console.log("The names match");
} else {
  console.log("The names do not match");
}

if ("Dog" === "dog") {
  console.log("The pet do not match");
} else {
  console.log("The pet do match");
}

// both strings to lowercase
var enteredName = "dora";
var requiredName = "Dora";

// converting both strings to lowercase or uppercase
if (enteredName.toUpperCase() === requiredName.toUpperCase()) {
  console.log("Name accepted");
} else {
  console.log("Name not accepted");
}

// AND && operator to check if more than one condition is true

var selectedNumber = 30;

// are the two conditions true; the selected number is both above or equal to 10 and below or equal to 50

if (secondNumber >= 10 && selectedNumber <= 50) {
  console.log("The selected number is within range");
}

var selectedNumber = 30;
var lowerLimit = 10;
var upperLimit = 50;

// between() first limit () second limit
//if statements inside an else block
if (selectedNumber >= lowerLimit && selectedNumber <= upperLimit) {
  console.log("Within range");
} else {
  if (selectedNumber < lowerLimit) {
    console.log("Number is too low");
  }
  if (secondNumber > upperLimit) {
    console.log("Number is too high");
  }
}

// Nested if statements

// requirements for cat school:
// cat , under 2, friendly

var petType = "dog";
var age = 3;
var isFriendly = true;

if (petType === "cat" && age < 2 && isFriendly === true) {
  console.log("Pet accepted");
} else {
  if (petType !== "cat") {
    console.log("Pet must be a cat");
  }
  if (age <= 2) {
    console.log("Pet must be 2");
  }
  if (isFriendly !== true) {
    console.log("Pet must be friendly");
  }
}

// The logical NOT (!) operator can be used to check for the opposite of a boolean value (true/false)

var orderShipped = false;

if (!orderShipped) {
  // the order did not ship
}

// if (orderShipped === false)
// if (orderShipped !== true)

// Logical OR (||) operator used when all the conditions must pass

var dayOfTheWeek = "Saturday";

if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
  console.log("It's the weekend");
}

var number = 2;

// winning number: 10, 14, 25

if (number === 10 || number === 14 || number === 25) {
  console.log("Winning number");
} else {
  console.log("Not a winning number");
}

//String properties
// Question 1 Use a JavaScript string method to determine whether these strings are equal regardless of letter case.
// var requiredName = "Gertrude";
// var suppliedName = "GERTRUDE";

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
  console.log("The strings are equal");
} else {
  console.log("The strings are not equal");
}

// Question 2 Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.
// var username = "myusername";
// If both tests pass log a message saying "Acceptable username".
// If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".
// Change the variable's value to test your code.

var username = "username";
var len = username.length;
console.log(len);

if (len >= 4 && len <= 10) {
  console.log("Acceptable username");
} else {
  if (len < 4) {
    console.log("Too few characters");
  }
  if (len > 10) {
    console.log("Too many characters");
  }
}

// Question 3
// The following criteria need to be met before an order can be considered complete:

//The invoice must be paid
//The product must have been dispatched
//The customer must have signed for the delivery

//Using the variables below write an if/else statement that determines whether the order is complete:

// var invoicePaid = true;
// var productDispatched = false;
// var customerHasSigned = false;

// If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.
// Use the logical AND (&&) operator to complete this task.
// Change the variables' values to test your code.

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid && productDispatched && customerHasSigned) {
  console.log("Order complete");
} else {
  if (!invoicePaid) {
    console.log("The invoice must be paid");
  }
  if (!productDispatched) {
    console.log("The product must have been dispatched");
  }
  if (customerHasSigned === false) {
    console.log("The customer must have signed for the delivery");
  }
}

// Arrays

var item1 = "bananas";
var item2 = "a few frogs";
var item3 = "some rats";

var shoppingList = ["banans", "a few frogs", "some rats"];

console.log(shoppingList);

// number of items in a array

console.log("length", shoppingList.length);

// add item to array - push()
shoppingList.push("rat poison");

console.log(shoppingList);

console.log("length", shoppingList.length);

// sort array - sort()
console.log(shoppingList.sort());

var sortedList = shoppingList.sort();
console.log(sortedList);

// Array.push prototype method to to add new items to the end of an array
var myArray = [];

console.log(myArray.length);
// 0

myArray.push(19);

console.log(myArray.length);
// 1

console.log(myArray);
// 19

myArray.push(99);
// [19, 99]

// adding colors to the color array

var colors = ["red", "pink", "yellow"];

colors.push("purple");

console.log(colors);

// length property of colors will be 4
console.log(colors.length);

// Array.unshift() when a new item should be added to the start, rather than the end of an array ex. blog, home page

var posts = ["I travelled", "Dear blog", "About me"];

console.log(posts);

var newPost = "A day in my life post";

console.log(newPost);

posts.unshift(newPost);

console.log(posts);

// Array.pop() to remove an item of the end of the array, the opposite to push

var example = [1, 2, 3, 4];
var lastItem = example.pop();

console.log(example);
// 1, 2, 3

// Array.shift to remove items from the beginning of an array

var example = [1, 2, 3, 4];
var fistItem = example.shift();

console.log(example);
// 2, 3, 4

// Accessing items in arrays, first item in an array starts at position 0

var colors = ["red", "pink", "yellow"];

var firstItem = colors[0];

console.log(firstItem);

var thirdItem = colors[2];

console.log(thirdItem);

var colors = ["red", "pink", "yellow"];

for (var i = 0; i < colors.length; i++) {
  var col = colors[i];
  console.log(col);
}

var colors = ["red", "blue", "green", "orange"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// or: for(var i = 0; i < colors.length; i++) {
// var col = colors[i];
// console.log(col);
// }

// Arrays
// Question 1 Console log the 3rd item in this array.
// var winningNumbers = [1, 76, 2, 78, 16, 7];

//accessing items in arrays
var winningNumbers = [1, 76, 2, 78, 16, 7];

var thirdItem = winningNumbers[3];
console.log(thirdItem);

// Question 2 Add a new item to this array using the push method and console log the new amount of items.
// var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("carrots");

console.log(vegetables);

// get the amount of items
var itemCount = vegetables.length;
console.log(itemCount);

// Question 3 Console log each item in this array using a for loop.
// var randomThings = ["pumpkin", false, 23, true, "tomato"];

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
  console.log(randomThings[i]);
}

// Question 4 Loop through this array but only log the item if it is a number value.
// var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
  var typeOfItem = typeof moreThings[i];

  if (typeOfItem === "number") {
    console.log(moreThings[i]);
  }
}

// Question 5 Order this array alphabetically and then loop through it and log each item.
// var ingredients = ["water", "flour", "toothpaste", "fish lips"];

// Array.sort
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
  console.log(sortedIngredients[i]);
}

// Question 6 Loop through this array and log every second item.

var characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];

for (var i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

// * Null, Objects and arrays of objects * //

// Truthiness and Falsiness
// Falsy values = undefined, null, 0, ""
// Truthy values = [], {}, "0"

var dog = {
  name: "Tripod",
  breed: "labrador",
  numberOfLegs: 3,
  owner: null, // no value
};

//accessing data within an object

console.log(dog.name);
console.log(dog.breed);
console.log(dog.owner);

// adding or updating data in an object using dot notation

var example = {
  edited: false,
};

example.edited = true;
example.text = "I have edited this example";
console.log(example);

// animal object

var animal = {
  type: "elephant",
  color: "grey",
  numberOfLegs: 4,
  domesticated: false,
};

var type = animal.type;

console.log(animal.color);

console.log(animal);

// storing arrays of objects

var product1 = {
  id: 327,
  name: "Screwdriver",
  price: 99.99,
};

var product2 = {
  id: 968,
  name: "Wrench",
  price: 50.95,
};

// an array of product objects
let products = [product1, product2];

// accessing specific objects based on it's index
console.log(products[1]);
console.log(products[1] === product2);

// looping through the array of objects using array prototype methods

// for (var i = 0; i < products.length; i++) {
//  var product = products[i];
//  var productName = product.name;
//  console.log(productName);
// }

// Finding objects in an array using array prototype method with product1 and product2 as example

let searchString = "Wrench";
let myObject = products.find(function (product) {
  return product.name === searchString;
});

console.log(myObject);

// var newsItem1 = {
// headline: "Headline 1",
//  summary: "laudantium quasi a nulla dolor ea sapiente."
// };

// var newsItem2 = {
//  headline: "Headline 2",
//  summary: "laudantium quasi a nulla dolor ea sapiente."
// };

var news = [
  {
    headline: "Headline 1",
    summary: "laudantium quasi a nulla dolor ea sapiente.",
  },
  {
    headline: "Headline 2",
    summary: "laudantium quasi a nulla dolor ea sapiente.",
  },
];

console.log(news);

var newsContainer = document.querySelector(".news");
for (var i = 0; i < news.length; i++) {
  var item = news[i];
  console.log(item.headline);

  console.log(item.summary);

  newsContainer.innerHTML =
    newsContainer.innerHTML +
    "<h3>" +
    item.headline +
    "</h3><p>" +
    item.summary +
    "</p>";
}

// Question 1 Console log the price property from the object below:

let product = {
  name: "Chicken feet",
  price: 149.99,
};

console.log(product.price);

// Question 2 Loop through the array below and console log each colour property.

let animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].color);
}

// Question 3 Loop through the array below and console log each name property only if it is on special.

let dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (let i = 0; i < dinnerOptions.length; i++) {
  if (dinnerOptions[i].onSpecial) {
    console.log(dinnerOptions[i].name);
  }
}

// Question 4 Loop through the array below and log each person's name and surname if they are between the ages of 20 and 50 (including 20 and 50):

let people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];

for (var i = 0; i < people.length; i++) {
  let age = people[i].age;
  let fullName = people[i].firstName + " " + people[i].lastName;

  if (age >= 20 && age <= 50) {
    console.log(fullName);
  }
}

// Question 5 Select the ul element in the HTML file, loop through the array below and create a li element containing the product name and price properties.

let productNames = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

let productContainer = document.querySelector("ul");

for (let i = 0; i < productNames.length; i++) {
  productContainer.innerHTML +=
    "<li>" + productNames[i].name + " - " + productNames[i].price + "</li>";
}

// * Functions * //

// declaring the function is only used to declare not call the function

function logWord(theWord) {
  console.log("one");
}

// call the function
logWord();
// one

// passing in a value as the theWord argument

function logWord(theWord) {
  console.log(theWord);
}

logWord("hello");

// declaring a function with two arguments
function addTwoNumbers(number1, number2) {
  let sum = number1 + number2;
  console.log(sum);
}

// calling the function to pass two arguments in
addTwoNumbers(3, 4);
//number1 = 3, number2 = 4 sum = 3 + 4 console 7

let helloThere = document.querySelector("h4");
let button = document.querySelector("button");
let buttonColor = document.querySelector(".color");

function changeHelloThere() {
  helloThere.innerHTML = "How are you?";
}

button.onclick = changeHelloThere;

function changeColor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
}

buttonColor.onclick = changeColor;
