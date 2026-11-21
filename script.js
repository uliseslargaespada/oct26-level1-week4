// console.log("Hello World!");

// Variables
// Think of a variable like a bucket, small containers
// Elements in JS that allows to store data temporarily
// syntax = how the programming language is written

let firstName = "Ulises"; 
// let -> keyword = reserve words by the programming language, it allows to create a variable
// const -> keyword = to create a variable that never changes
// firstName -> name of the variable I just created with `let`

// console.log(firstName);

const lastName = "Longsword";

firstName = "Eduardo";

// console.log(firstName);
// console.log(lastName);

// Perform calculations
const number1 = 25;
const number2 = 50;

const sum = number1 + number2;

// Concatenation
// Joining strings or values 
// The basic calculation, addition, subtraction, etc 
// console.log("Sum: ", sum);
// console.log("Subtraction: ", number1 - number2);
// console.log("Multiplication: ", number1 * number2);

// Joining string literals using template literals
// console.log(`Division: ${number1}/${number2}`);

/*
  BOOLEANS
  This are values that can be either true or false
*/
// true or false are keywords in JS
console.log("false", false);

// Primitive data types
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof 345);

console.log("Is 10 greater than 9?: ", 10 > 9);
console.log("Is 6 greater than 20?: ", 6 > 20);
console.log("Is 15 equal to 15?: ", 15 == 15);

// Concert information
const venueCapacity = 100;
let registeredPeople = 20;

console.log("Is the venue full?", registeredPeople >= venueCapacity);

/* Booleans allows to create statements */
// if, else statements
// "if" -> another keyword
// "else" -> another keyword
if (registeredPeople >= venueCapacity) {
  console.log("Venue is full, no more tickets");
} else {
  console.log("Venue is not full, you can buy a ticket");
}


// Type value statement
// === -> compare type as well
// == -> just the value
console.log("Is 15 equal to 15?: ", "15" === 15);

registeredPeople = 90;

// if (registeredPeople > venueCapacity) {
//   console.log("You're buying more than what we can sell");
//   return;
// }

// /* if/else statements can be nested */
// if (registeredPeople < venueCapacity) {
//   console.log("Venue is not full, you can buy a ticket");
// } else if (registeredPeople === venueCapacity) {
//   console.log("Venue is at max capacity, no more tickets");
// } else {
//   console.log("Venue is over capacity, no more tickets");
// }


// NOT statement
if ((10 > 9)) {
  console.log("got tru the if");
} else {
  console.log("Value got negated");
}

/* FUNCTIONS */
// Functions are a block of reusable code
// function -> keyword to declare a function
// Parameters -> these are values that you send to the function
function getSeatsLeft(capacity, registered) {
  // Hard validations
  if (typeof capacity === "string" || typeof registered === "string") {
    throw Error("Incorrect type for function getSeatsLeft");
  }

  const seatsLeft = capacity - registered;

  return seatsLeft;
}


// Then you need to call the function
console.log("Amount of seats left: ", getSeatsLeft(200, 80));

function getRegistrationStatus(capacity, registered, isOpen) {
  const seatsLeft = getSeatsLeft(capacity, registered);

  // If isOpen is false, we say that the registration is closed
  if (!isOpen) {
    return "Registration is closed.";
  } else if (seatsLeft > 0) {
    return "Seats available.";
  } else {
    return "Activity is full.";
  }
}

console.log("Are there seats available?", getRegistrationStatus(200, 100, true));
