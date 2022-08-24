/*
    Week 7 - Day 2 - Homework Exercises
*/




/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

/*
    Notes/Psuedo Code
    Formula to convert Fahrenheit to Celcius:
    (F° - 32) / 1.8 = C°
*/

//-------------- Code --------------//

let toCelcius = i => {
    // Converting Fahrenheit input to Celcius
    return ((i - 32) / 1.8)
};

console.log('----------- Exercise #1 -----------')

// Test Function: toCelcius
i = 32
console.log(`Fahrenheit: ${i}°  =>  Celcius: ${toCelcius(i)}° `);
// Output: Fahrenheit: 32°  =>  Celcius: 0° -- day2Homework.js:29

i = 212
console.log(`Fahrenheit: ${i}°  =>  Celcius: ${toCelcius(i)}° `);
// Output: Fahrenheit: 212°  =>  Celcius: 100° -- day2Homework.js:31

i = 50
console.log(`Fahrenheit: ${i}°  =>  Celcius: ${toCelcius(i)}° `);
// Output: Fahrenheit: 50°  =>  Celcius: 10° -- day2Homework.js:33

console.log('')




/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

/*
    Notes/Psuedo Code
    User class (sets username and password property on instantiation)
    Method to alter/edit user's password
    Check for correct old password before changing new password (if old password is wrong, do NOT reset)
    Test User class (make user and change their password)
*/

//-------------- Code --------------//


class User{
    constructor(id = 0) {
        let secureUserStorage = []
        let secureIdCounter = 0
        const user_input = prompt('Please enter your desired username: ');
        const pass_input = prompt('Please enter your desired password: ');
        this.username = user_input;
        this.password = pass_input;
        this.id = id;
        id = secureIdCounter;


        // for (user_input, pass_input; ) {
        // };


            // Shortest a username or password can be is 3 characters
            if (user_input.length <= 3|| pass_input.length <= 3) {
                alert ("We're sorry, the length of your username or password is unsecure. " + "For your safety, we reccomend imputting a username and password greater than 3 characters! ");
                return false;
            }
            // Username can NOT be the same as password
            else if (user_input == pass_input) {
                alert("We're sorry, your username can NOT be the same as your password. " + "Please try again! ");
                return false;
            }
            // Username has to be unique
            else if (user_input in secureUserStorage) {
                alert(`We're sorry, ${user_input} is already in use. " + "Please try again! `);
                return false;
            }
            // If username and password are valid
            else {
                // add 1 to User id and to global secureIdCounter
                id++
                // .push new User to global secureUserStorage
                // secureUserStorage.push(user_input, pass_input, User.id)
                secureUserStorage.push(User)
                alert(`Welcome to the club ${secureUserStorage}! `)
                return true;
        
            
        };
    };

    checkPassword() {
        const userInputPassword = prompt('Please enter your curent password! ');
        // User input can NOT be empty
        if (userInputPassword == '')
            alert ('To continue, please enter your password! ');
        // User input password needs to match their User.password
        else if (userInputPassword !== secureUserStorage.User.password) {
            alert ("We're sorry, your password was incorrect... Please try again! ");
            return false;
        }
        // If password matches User.password it is valid
        else (userInputPassword === secureUserStorage.User.password) 
            alert ('Your password has been successfully verified! ');
            return true;
    };

    editPassword() {
        if (User.checkPassword());
        const newPassword = prompt('Please enter your newly desired password! ') 
            if (newPassword.length <= 3) {
                alert ("We're sorry, the length of your password is unsecure. " + "For your safety, we reccomend imputting a password greater than 3 characters! ");
                return false;
            }
            else (newPassword === secureUserStorage.User.password)
                alert ("Congradulations, your password has been successfully updated! ");
                return true;   
    };
};

console.log('----------- Exercise #2 -----------')

// Test User Class:
// let test = new User();

// Test Edit Password Method:


console.log('')




/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

/*
    Notes/Psuedo Code
    Parse through array
    for each element (check for positive/negative)
    if positive do NOTHING (do NOT add to list/remove)
    if negative (take abs and square)
*/

//-------------- Code --------------//
// Arrow functions because only 1 argument is passed
let onlyNegativesSquared = (arr) => {
    // Only square the positive numbers
    let squaredNumbers = arr.filter(num =>    // .filter to take all numbers that are negative
        // .map to square the negative numbers    
        (num < 0)).map(x => (x * x));
    // Return suqared negative numbers
    return squaredNumbers;
};

console.log('----------- Exercise #3 -----------')

// Test Function: onlyNegativesSquared
squareNegatives = ([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
let squaredNumbers1 = onlyNegativesSquared(squareNegatives);
console.log(squaredNumbers1);
// Output: [100, 9, 4, 9] -- day2Homework.js:188

squareNegatives = ([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
let squaredNumbers2 = onlyNegativesSquared(squareNegatives);
console.log(squaredNumbers2);
// Output: [25, 16, 9, 4, 1] -- day2Homework.js:193

squareNegatives = ([2, 4, 6, 8, 10]) // []
let squaredNumbers3 = onlyNegativesSquared(squareNegatives);
console.log(squaredNumbers3);
// Output: [] -- day2Homework.js:198
