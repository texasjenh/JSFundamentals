// 1. What are the results of these expressions?
// "" + 1 + 0 // 10 / empty string = 1 and 0 (concatenate)
// "" - 1 + 0 // -1 / empty string -1 and 0
// true + false // 1 / if true = 1 and false = 0 boolean
// !true // false / exclamation = not, therefore not true is false boolean
// 6 / "3" // 2 / 6 divided by a string of 3 (converted to a #)
// "2" * "3" // 6 / string converted to #s 2*3=6
// 4 + 5 + "px" // 9px / can only add once then concatenate the second
// "$" + 4 + 5 // $45 / string($) + 4 = $4 then concatenate the 5
// "4" - 2 // 2 / String contains a # so it reads as 4-2
// "4px" - 2 // NaN / 4px is Not a Number therefore cannot subtract
// "  -9  " + 5 // -9  5 / treats this as concatenating -9 and 5 = -9  5, spaces are preserved
// "  -9  " - 5 // -14 / string is a negative # and converts it to a number therefore -9-5=-14
// null + 1 // 1 / null = nothing or 0 so 0 + 1 = 1
// undefined + 1 // NaN / undefined = a variable that has not been assigned a value therefore undefined cannot be converted to a valid number so NaN
// undefined == null // true / implicit conversion: undefined and null both = nothing therefore both are true, double equals 
// undefined === null // false / strict equality operator not implicit, undefined and null are not the same so it is false
// " \t \n" - 2 // -2 / attempts to convert \t and \n to numbers but they are not so ignores and moves to the number (-2)

// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log(true + false)
// console.log(!true)
// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log("  -9  " + 5)
// console.log("  -9  " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(undefined == null)
// console.log(undefined === null)
// console.log("\t \n" - 2)

// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

// let three = "3" // string of 3
// let four = "4" // string of 4
// let thirty = "30" // string of 30

// // What is the value of the following expressions?
// let addition = three + four // 34 - INCORRECT - addition concatenates because the #s are strings "" and not adding #s to equal 7
// let multiplication = three * four // 12 - CORRECT - coverts strings to #s is multiplying 3 and 4 to equal 12
// let division = three / four // 0.75 - CORRECT - converts strings to #s therefore 3 divided by 4 is .75
// let subtraction = three - four // -1 - CORRECT - converts strings to #s so 3 - 4 is -1

// let lessThan1 = three < four // true - CORRECT - 3 is less than 4 = true
// let lessThan2 = thirty < four // true - INCORRECT because 30 is greater than 4 but reads true since 

// // console.log(addition)
// // console.log(multiplication)
// // console.log(division)
// // console.log(subtraction)

// console.log(lessThan1)
// console.log(lessThan2)

//  3. Which of the following console.log messages will print? Why?

// if(0) console.log('#1 zero is true') // does not print - no string, zero is false
// if("0") console.log('#2 zero is true') // prints - use of string "" makes it true 
// if(null) console.log('null is true') // does not print - null is false
// if(-1) console.log('negative is true') // prints - non-zero is true
// if(1) console.log('positive is true') // prints - 1 is positive so true

//  4. Rewrite this 'if' using the ternary/conditional operator '?'.
//     Test with different values for a and b. 
//     What does the '+=' do?
// Ternary is ? - a short hand/one line if else statement

// let a = 2, b = 3;
// let result = '${a} + ${b} is';

// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

// let a = 8, b = 16; // variable declaration of a = 8 and b = 16
// let result = `${a} + ${b} is `;

// result += (a+b <10) ? 'less than 10' : 'greater than 10'

// console.log(result)

// let a = 2, b = 4;
// let result = `${a} + ${b} is `

// result += (a+b <10) ? 'less than 10' : 'greater than 10'

// console.log(result)

//  += padds value on its right to the variable or property on its left and assigns the result to the variable or property on its left.

//  5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax.
//     Test each function to make sure they work the same.
//  function getGreeting(name) {
//      return 'Hello ' + name + '!';
//  }

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }
// console.log(getGreeting('Jen'))

// // Function expression syntax
// const getGreetingA = function(name) {
//     return 'Hello ' + name + '!';
// }

// console.log(getGreetingA('Jen'))

// // Arrow function syntax
// const getGreetingB = (name) => 'Hello ' + name + '!';
// console.log(getGreetingB ('Jen'))

//  6. a) Complete the 'inigo' object by adding a lastName property and including it in the greeting.
//     b) Complete the getCatchPhrase so that if the 'person' argument has 6 fingers, it instead prints his famous catch phrase to the console.
//     c) Update getCatchPhrase to use arrow function syntax and a conditional operator

// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }

// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }

// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya',
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `
//         console.log(greeting + this.getCatchPhrase(person))
//     },
//     getCatchPhrase(person) {
//         return 'Nice to meet you.';
//     },
//     getCatchPhrase: (person) => person.numFingers == 6 ?
//         'You killed my father. Prepare to die.' : 'Nice to meet you.'
// }

// inigo.greeting(westley)
// inigo.greeting(rugen)

// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
//      a. Modify each of the methods so that they can be 'chained' together and the last line of the example code works.
//      b. Add a new method to print the full time final score.
//      c. Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages.
//      d. Test your object by chaining all the method calls together in different combinations.

// const basketballGame = {
//     score: 0,
//     fouls: 0,
//     halfTimeScore: 2,
//     freeThrow() {
//         this.score++;
//         return this
//     },
//     basket() {
//         this.score += 2;
//         return this
//     },
//     threePointer() {
//         this.score += 3;
//         return this
//     },
//     foul() {
//         this.fouls++;
//         return this
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.halfTimeScore+' ('+this.fouls+' fouls).')
//         return this
//     },
//     fullTime() {
//         console.log('Final score is '+this.score+' ('+this.fouls+' fouls).')
//         return this
//     }
// }

// basketballGame.basket().foul().freeThrow().freeThrow().basket().foul().threePointer().halfTime().fullTime();

// 8. The object below represents a single city.
//      a. Write a function that takes an object as an argument and uses a 'for...in' loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.
//      b. Create a new object for a different city with different properties and call your function again with the new object.

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }

// function printCityProps(cityObj) {
//     for (cityProp in cityObj) {
//         console.log(cityProp + '=' +cityObj[cityProp]);
//     }
// }
// printCityProps(sydney)

// const austin = {
//     name: 'Austin',
//     state: 'Texas',
//     population: 9_84_567,
//     founded: '27 December 1839',
//     timezone: 'Central',
//     motto: 'Keep Austin Weird'
// }   
// printCityProps(austin)

// 9. Use the following variable to understand how JavaScript stores objects by reference. 
//  a. Create a new 'moreSports' variable equal to 'teamSports' and add some new sport values to it (using 'push' and 'unshift').
//  b. Create a new 'dog2' variable equal to 'dog1' and give it a new value.
//  c. Create a new 'cat2' variable equal to 'cat1' and change its 'name' property.
//  d. Print the original 'teamSports', 'dog1', and 'cat1' variables to the console. Have they changed? Why?
//  e. Change the way the 'moreSports' and 'cat2' variables are created to ensure the originals remain independent.

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports;
// moreSports.push('Football');
// moreSports.unshift('Baseball');

// let dog1 = 'Bingo';
// let dog2 = dog1;
// dog2 = 'Copper';

// let cat1 = {name: 'Fluffy', breed: 'Siberian'};
// let cat2 = cat1;
// cat2.name = 'Catherine the Great';

// console.log(teamSports) // Changed - yes. Added the moreSports push (Baseball) to the start of list and the moreSports unshift (Football) to the end of the list.
// console.log(dog1) // no change since these are string primitives and store independent values 
// console.log(cat1) // saved as an object and cat2 points to cat1 so cat1 took cat2 name

// let moreSports2 = [...teamSports]
// moreSports.push('Tennis');
// console.log(teamSports)

// let cat3 = {...cat1}
// cat3.name = 'Maisie';
// console.log(cat1)


// 10. The following constructor function creates a new 'Person' object with the given 'name' and 'age' values.
//  a. Create a new person using the constructor function and store it in a variable.
//  b. Create a second person using a different name and age values and store it in a separate variable.
//  c. Print out the properties of each person object to the console.
//  d. Rewrite the constructor function as a class called 'PersonClass' and use it to create a third person using different name and age values. Print it to the console as well.
//  e. Add a 'canDrive' method to both the constructor function and the class that returns true if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age >= 16;
}

let person1 = new Person('Maisie Beans', 3);
let person2 = new Person('Coach Amy', 50);

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >=16
    }
}

let person3 = new Person('Dude Chris', 29);

// console.log(person1)
// console.log(person2)
// console.log(person3)

if (person1.canDrive()) console.log(person1.name + ' is '+person1.age+' and can drive.');
if (person2.canDrive()) console.log(person2.name + ' is '+person2.age+' and can drive.');
if (person3.canDrive()) console.log(person3.name + ' is '+person3.age+' and can drive.')