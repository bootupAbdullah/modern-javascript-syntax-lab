// -----> Example of Array.map

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
    return currentElement + ' ice cream';
  });
  
  console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
  

//!!  -----> Excercise 1:
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const nums2 = nums.map((currentElement) => {
    return currentElement * 2
})

// console.log(`nums2: ${nums2}`)


// -----> Example of Array destructing
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'


//!!  -----> Excercise 2:
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstValue, secondValue] = pizzaToppings
// console.log(firstValue)
// console.log(secondValue)



// -----> Example of Destructing Objects
const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'

  //!!  -----> Excercise 3:
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };

  const {make, model} = car

//   console.log(make)
//   console.log(model)


// -----> Example of the spread operator on arrays
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

//!!  -----> Excercise 4:

const comics = ["Action Comics", "Detective Comics", "Superman", "Batman"]
const cars = ["Trucks", "SUV", "Sedan", "Minivan"]

const comicsAndCars = [...comics, ...cars]

// console.log(comicsAndCars)

// -----> Example of the spread operator on objects

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  // Copy the properties of originalObject:
  const clonedObject = { ...originalObject };
  
  // Update the properties of clonedObject:
  clonedObject.foo = 'Goodbye';
  clonedObject.bar = 0;
  
//   console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
//   console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }
  


//!!  -----> Excercise 5:
// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
const myCar = {...car2}

// update properties of clone object
myCar.model = 'q7'

// console.log(car2)
// console.log(myCar)


// -----> Example of the dynamic keys in objects
const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
//   console.log(selectedFruitCount); // 2

const fruitType = 'bananas'; // Variable as a dynamic key

// const fruitInventory = {
//   [fruitType]: 5,
// };

// console.log(fruitInventory); // { bananas: 5 }



//!!  -----> Excercise 6:

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

let userProfile = {}

let propertyName = "username"

userProfile = {
    [propertyName] : "abdullahkd"
}

// console.log(userProfile)

// -----> Example of import and export

// export const myNumber = 123;
// export const myString = 'Hello';

// export default function superCoolFunction() {
//     /* ... */
//   }


// import { myNumber, myString } from './myData.js';
// import superCoolFunction from './superCoolFunction.js';

// import * as MyData from './myData.js';
// console.log(MyData.myNumber);
// console.log(MyData.myString);


//!!  -----> Excercise 8:

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

function twoParameters( noun = "cat ", adjective = " white") {
  return "the " + noun + "is " + adjective
}

console.log(twoParameters())



// -----> Example of the ternary operator

// const age = 22;
// let access;

// if (age > 21) {
//   access = 'Yes';
// } else {
//   access = 'No';
// }

// console.log(access); // 'Yes'

// const age = 22;
// let access = age > 21 ? 'Yes' : 'No';

// console.log(access); // 'Yes'


//!!  -----> Excercise 9:

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// const pizza = 'tasty';
// let decision = pizza === "tasty" ? console.log('yum') : console.log('yuck')


let myVar = "farce"

const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);
// console.log('result4:', result4);


//!!  -----> Excercise 10:
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

let LANG = localLangConfig || "en"
// Log the result
// console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

let USER_THEME = userSavedTheme || 'dark';

// Log the result
// console.log('User theme setting:', USER_THEME);

//!!  -----> Excercise 11:

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age

// console.log(cat)
