// console.log('hello'); console.log('world');

// console.log('hello')
// console.log('world')

/*code block comment
    function printConsoleMessage() {
        console.log('I am commented out')
        } */

// const integer = 123 integer - whole number
// const float = 12.345 floating point - decimal number

// console.log(1/0) - division by zero = Infinity
// console.log(-1/0) - negative division by zero = -Infinity
// console.log("not a number" / 1) = invalid mathematical operation = NaN (Not a Number)

// PEMDAS = Please Excuse My Dear Aunt Sally = order of operations
// Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

// let one = 1
// let two = 2
// let three = 3

// console.log(one + two - three * two / one);

// const bigint_valid = 123456789012345678901234n;
// const bigint_invalid = 1234567890123456789012345; //too large for standard integer
// console.log(bigint_valid == bigint_invalid)

// -strings
// const doubleQuotes = "String that can include 'single quotes'"
// const singleQuotes = 'string that can include "double quotes"'
// const backTicks = `string that can include variables - ${singleQuotes}`

// -Booleans
// let isChecked = false;
// let isToggleOn = true;
// isChecked = !isChecked; //exclamation mark is equal to NOT
// console.log(isChecked);

// -null
// let age = null
// console.log(age)

// -Undefined
// let location;
// let age = null;
// console.log(`${location} == ${age} ? ${location == age}`)
// console.log(`${location} === ${age} ? ${location === age}`)

// const tv = { // object starts here
//     brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
//     size: "55-inch", // values can be any data type
//     model: 2023, // multiple key-value pairs are separated by commas
//     resolution: "4K" // the comma on the last key-value pair can be omitted
//    } // object ends here. All data is stored in tv variable.

// -Datatypes
// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof 'text');
// console.log(typeof Symbol('id'));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof console.log);

// -STRING CONVERSION
// -Explicit conversion - using String class function
// console.log( String(false) ) //string form of boolean

// -Implicit conversion by concatenating a existing string
// console.log( "1" + 2 + 3 ) // 123 - string '1' is combined with number 2 then number 3
// console.log( 1 + 2 + "3") //33 - number 1 is added to number 2 then combined with string '3'

// -NUMERIC CONVERSION - Explicit conversion
// console.log( Number("    4    ") ) //4 - trims spaces
// console.log( Number(null) ) // 0 - intentionally empty value conversts to zero
// console.log( Number(undefined) ) // NaN - non-existent value is unknown
// console.log( Number(false) ) // 0 - false converts to 0
// console.log(Number(true)) // 1 - true converts to 1
// console.log(Number("")) // 0 - empty string converts to 0
// console.log(Number("not a number")) //NaN - non-empty strings beginning with characters cannot convert

// -NUMERIC CONVERSION - Implicit conversion
// console.log("6"/"2") // 3
// console.log("6"*"2") // 12
// console.log("6"-"2") //4
// console.log(+"6") //6
// console.log("6"+"6") //concatenating the numbers = "66"

// - BOOLEAN CONVERSION
// console.log(Boolean("")) // false - empty string
// console.log(Boolean(0)) // false - zero value
// console.log(Boolean(null)) // false - no value
// console.log(Boolean(undefined)) // false - unknown value
// console.log(Boolean(NaN)) // false - not a number
// console.log(Boolean("false")) // true - non-empty string
// console.log(Boolean(-1)) // true - non zero number

// if("") console.log('empty string is true') // implicit "" - conversion to false - won't print message
// if(undefined) console.log('undefined is true') // implicit conversion to false - won't print message

// - Conditional Statement
// console.log(NaN?'Nan is true':'NaN is false') // NaN is false
// console.log(0?'zero is true':'zero is false') // zero is false
// console.log("hello"?'hello is true':'hello is false') // hello is true

// - Negation
// console.log(!undefined) // true - convert value to Boolean then negate it (opposite)
// console.log(!!"") // false - convert value to Boolean then negate/toggle twice

// - Function/Declaration
// Function keyword followed by custom function name, then ()
// function helloWorld()
// {
//     console.log('hello world');
// }

// helloWorld();

// function checkAge returns a value when called
// function checkAge(age) {
//     if (age>=18) {
//         return 'adult'; // if the condition is true, return this string and exit
//     }
//     return 'non-adult'; // if the condition was false, return this string and exit
// }

// console.log(checkAge(21)) //adult
// console.log(checkAge(13)) //non-adult

// - Function/Expressions

// const sayHi = function() { // function expression syntax for creating a function
//     console.log('Hi')
// }

// - Function Expression vs. Function Declaration
// sayHiExpression(); // error - cannot access before initialization
// sayHiDeclaration(); // works - can be hoisted/ will work before initialization

// const sayHiExpression = function() {
//     console.log('Hi');
// }

// function sayHiDeclaration() {
//     console.log('Hi');
// }

// - Functions - Arrow
// const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concise

// sayHiArrow();

//  - Objects

//  - object constructor - not used much
// const user = new Object()

// - object literal - more common
// const user = {}
// const ball = {}
// const car = {}

//  - Oject with properties

// const user = { // user object contained within curly brackets
//     name: 'Joe', // string property with key 'name" and value 'joe'
//     age: 20, // numeric property with key 'age' and value 20
//     'has a cat': true // multi-word property key 'has a dog' with boolean value true
// };

//  - Object with operations
// console.log(user.name); // get object property called name and log it
// let catOwner = user['has a cat']; // get value of property 'has a dog' and assign to new variable
// user.age = 28 // set (or assign) new value to object property called age
// user.name = 'Jen'

// console.log(user.name)
// console.log(user.age)

// user.location = 'NSW';

// console.log(user.location)
// delete user.location;

// console.log(user.location)


//  - Property name limitation
// const object = {
//     2: 'value of numeric property',
//     '2': 'value of string property'
// }

// console.log(object) // {'2': 'value of string property'} since 2 and '2' are the same

//  - Property existaence test

// const phone = {
//     model: '15 Pro Max',
//     color: 'blue',
//     storage: 500
// }

// if(phone.color) console.log(`My ${phone.model} is ${phone.color}`)
// if (phone.storage) {
//     console.log(`My ${phone.model} has ${phone.storage}GB`);
// }

// - Iteration

// let goal = 5
// for (let i = 0; i < goal; i++) {
//     console.log(`iteration ${i} of ${goal}`)
// }

// - Object Iteration

// const phone = {
//     model: 'iPhone 15 pro Max',
//     color: 'green',
//     storage: 512
// }

// for (let key in phone) { // iterates over each property in the phone object, stores 'key' variable
//     console.log(`key: ` + key); // prints each object property name (key) in turn
//     console.log(`value: ` + phone[key]); // prints each object value in turn
// }

// const me = {
//     name: 'Jen',
//     eyecolor: 'brown',
//     location: 'Texas'
// }

// for (let key in me) {
//     console.log(`key:` +key);
//     console.log(`value:` + me[key])
// }

// - Obect References
// let person1 = {name:'Anna'}; // object - stored by reference
// let person2 = person1; //person2 points to same memory location as person1
// person1.name = 'Brian'; 
// console.log(person2.name); //Brian, even though we changed person1.name

// let person3 = 'Carly'; // string - stored by value
// let person4 = person3; // person4 points to separate memory location then person3, bu tboth store same value
// person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values

// - Object Shallow Copy
// const user = {name: 'Elloitt', age: 27};

// const userClone = {} // empty object, refers to different memory location
// for (let key in user) { // iterate over user properties
//     userClone[key] = user[key]; // re-create them in userClone
// }
// console.log(userClone); // {name: 'Elloitt', age: 27}

// - Shallow Copy with Object Spread
// const userClone = {...user}; //spread or unpack user properties into new object
// console.log(userClone); // {name: 'Elloitt', age: 27}

// - Override values or add in new properties
// const userClone = {...user, age: 28, location: 'Australia'};
// console.log(userClone); // {name: 'Elloitt', age: 28, location: 'Australia'}

// - Merge multiple objects into a single new object
// const vehicle = {make: 'Toyota', model: 'Supra'};
// const mergedUser = {...user, ...vehicle};
// console.log(mergedUser); // { name: 'Elloitt', age: 27, make: 'Toyota', model: 'Supra' }

// - Deep Clone
// const box1 = {
//     weight: '20kg',
//     dimensions: { // nested object property
//         width: '30cm',
//         height: '10cm'
//     }
// }
// const box2 = {...box1}; // shallow clone
// box1.dimensions.height = '12cm'; // fchange box1 nested object property
// console.log(box2); // box2 references box1 dimensions and picks up height change

// - Objects - Methods

// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() { // method of user object
//         console.log('Roads go ever ever on');
//     },
//     sing2() { // shorthand method syntax, does same as above
//         console.log('Over rock and under tree');
//     }
// }
// user.sing(); // Roads go ever ever on
// user.sing2(); // Over rock and under tree

// - Object methods with context
// const user = {
//     name: 'Bilbo Baggins',
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`) // 'this'is the current object
//     }
// }// 'user' is before the dot, provides the context where 'this' comes from
// user.printGreeting(); // Hello, I'm Bilbo Baggins

// - Objects - Constructor function
// function User(first, last) { // constructor function
//     this.first = first;
//     this.last = last;
//     this.hasShortName = () => this.first.length <= 3;
// }
// // We can create multiple users with different names
// let user1 = new User('Tim', 'Smith'); // need to use 'new'
// console.log(user1); // User {first: 'Tim', last: 'Smith'}
// console.log(user1.hasShortName()); // true


// REVISION
// 1. What are 3 advantages of programming in JavaScript?
    // 1. It has full integration with HTML and CSS. 2. It is supported by all major browsers and enabled by default. 3. Can be used for both front-e3nd and back-end applications.

// 2. What is a variable, and what are 3 keywords used to create one?
    // A variable is a 'named storage' for data. 3 keywords are const, var, & let.

// 3. What are 5 common variable data types?
    //1. Numbers 2. BigInt 3. String 4. Boolean 5. Null

// 4. What are some different types of numbers supported in JS?
    // Integers and floating point (decimals) nad BigInt (big integers)

// 5. What are 3 types of quotes used to create a string?
    // 1. Single quotes '', 2. Double quotes "", and 3. backticks ` `

// 6. What is the difference between null and undefined?
    // Undefined = a variable that has been declared but not assigned a value. Null = a variable has been declared and given the value of null.

// 7. How can we convert a variable to a string? To a number?
    // With explicit conversion by using String class function or with implicit conversion using concatenation of an existing string.
    // With explicit conversion using the Number class function or with implicit conversion when using division (/), multiplication (*), subtraction (-), and unary plus (+).

// 8. What is a boolean?
    // A result that can have only one of two possible values: true or false.

// 9. What is a function? What are 3 ways to create one?
    // Functions are the main building blocks of programming and allow blocks of code to be defined once and called many times. 
    // The three ways to create a function are: Declaration, Expression, and Arrow.

// 10. What is an object? How can we create one?
    // An object is a complex variable which stores and optional list of properties and used to store keyed collections of various data and more complex entities.
    // An object can be created with curly brackets {}.
