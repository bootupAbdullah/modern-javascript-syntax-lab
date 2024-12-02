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

console.log(`nums2: ${nums2}`)


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
console.log(firstValue)
console.log(secondValue)



// -----> Example of Destructing Objects
