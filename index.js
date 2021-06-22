//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

const input = require('readline-sync');


//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
 //let pantry = [protein, grains, veggies, beverage, dessert]
 
 for (let i = 0; i < 6; i++){
   console.log (protein [i], grains [i], veggies [i], beverage [i], dessert [i])
 }

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
let meal = -1;
// let j = -1;
while (meal < 1 || meal > 6 ){
  meal = Number(input.question('How many meals? '));
  if(meal < 1 || meal > 6){
    console.log("Please select a number (1-6)");
  }
  else {
    console.log("Thank you for your selection.");
  }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
console.log("The protein you selected is ", protein[meal-1]);

// b. Use an “array of arrays” to store the food options in a ‘pantry’.
let pantry = [protein, grains, veggies, beverage, dessert];

// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
