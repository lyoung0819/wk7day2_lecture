// console.log('Hello this is the main.js')


// // ----------------------------------------------------------------------------
// //  >> BOOLEANS <<
// // ----------------------------------------------------------------------------

// var myBool1 = true;
// console.log(myBool1, typeof myBool1);

// var myBool2 = false;
// console.log(myBool2, typeof myBool2);

// console.log('NEGATE A BOOLEAN')
// // >> NEGATE a boolean
// console.log(!true); // false
// console.log(!false); // true


// console.log('CONVERTING TO BOOLEANS')
// // Converting to Booleans
// // use the Boolean() constructor
// var firstName = 'Brian';
// console.log(Boolean(firstName)); // true - non empty strings evaluate to true

// var emptyString = '';
// console.log(Boolean(emptyString)); // false - empty strings are considered false

// var someNumber = 55;
// console.log(Boolean(someNumber)); // true - all non-0 numbers eval to true

// var zeroNum = 0
// console.log(Boolean(zeroNum)); // false - all 0 numbers are false

// // ** Undefined and Null will always be false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false



// console.log('DOUBLE NEGATION')
// // >> DOUBLE NEGATION
// // Common tactic for converting to bool
// console.log(firstName);
// // Use a single ! to give the opposite that we would get from bassing into Boolean 
// console.log(!firstName); // false (the '!' flips the boolean value, and it is then converted in a bool)

// // Use double !! to negate the origin negation
// console.log(!!firstName); // true 



// console.log('CHAINING BOOLEANS')
// // >> CHAINING BOOLEANS
// // In python, we can use 'and',  'or' -- in JS, we use && and || 
// console.log(true || true);
// console.log(true || false);

// console.log('with || or');
// console.log('with && or');

// console.log(true && true);


// //  ---------
// console.clear()
// //  ---------


// console.log('SHORT CIRCUITING')
// // >> SHORT CIRCUITING 

// function t1(){
//     console.log('t1 is running');
//     return false;
// }

// function t2(){
//     console.log('t2 is running');
//     return false;
// }

// function t3(){
//     console.log('t3 is running');
//     return true;
// }

// // When using the && operator, once an expression returns false, no follow code is run
// t1()&&t2() // just see 't1 is running'

// t3()&&t2() // returns 't3 is running' 't2 is running' 

// // It will run the full expression until it sees a return false

// // When using the || operator, once something return true, no following expressions are ran 
// t3()||t2() // just see t3 is running, because after it sees variable 1 is true, it stops 




// // ----------------------------------------------------------------------------
// //  >> NULL v UNDEFINED <<
// // ----------------------------------------------------------------------------

// // Undefined - means that the variable was declared, but not given a value
// // Null - is a value and can be assigned to represent no value 
// var myUndefined1;
// var myNull = null; 

// console.log(myUndefined1);
// console.log(myNull); 
// console.log('types:\n')

// console.log(typeof myUndefined1); // undefined
// console.log(typeof myNull); // object ! Why do we get object?
// //  This is a KNOWN bug in JS! 




// // ----------------------------------------------------------------------------
// //  >> LET & CONST <<
// // ----------------------------------------------------------------------------

// // let - can reassign a value to a variable
// // const - cannot reassign a value once it is set! 

// // These are two other ways to declare a variable, but they have some tricks to them
// // -- Variables declared with var can be redeclared (and this can be dangerous!)

// var myCity = 'St Louis'
// console.log(myCity);

// var myCity = 'New York'
// console.log(myCity);

// // -- Variables declared with let and const cannot be redeclared - saves us from ourselves! 

// let myState = 'Missouri';
// console.log(myState);

// myState = 'California';
// console.log(myState);

// const myCountry = 'USA'
// console.log(myCountry);

// // myCountry = 'Ireland'; // This will throw an error!
// console.log(myCountry);

// // let - can reassign a value to a variable
// // const - cannot reassign a value once it is set! 


// let myFavColor = 'blue';
// myFavColor = 'green';
// console.log(myFavColor);

// const myFavAnimal = 'dog'

// // var - global scoped (function scope if in function)
// //  let and const - block scoped (as in block of code)


// if (true) {
//     var testVar = 'test'; // var is globally scoped
//     console.log('Inside Block:', testVar)
// } // test (it returns)

// console.log('Outside block:', testVar); // test (it returns)

// if (true){
//     let testLet = 'test let'; // let is block scoped 
//     console.log('Inside Block:', testLet)
// }; // testLet (it returns)

// console.log('Outside Block:', testLet); // Uncaught ReferenceError: testLet is not defined (it does not return!)

// // JS has the same lexical scope (meaning functions can find variables outside of itside, but cannot go into nested functions or others, etc.)


// // ----------------------------------------------------------------------------
// //  >> ARRAYS <<
// // ----------------------------------------------------------------------------

// // >> DECLARING
// let people = ['Taylor Swift', 'Harry Styles', 'Beyonce', 'Billie Eilish'];
// console.log(people);
// console.log(typeof people); // object l


// // >> ACCESSING 
// // simliar to python, but doesn't have the ability for negatives
// console.log([people[0]]); // ['Taylor Swift']

// // Just like with strings, arrays have a built in .length property
// console.log(people.length); // 4 



// // >> METHODS << 

// // >> .push(value) -- similar to python's append(), adds value to the end of an array and returns new length
// console.log(people)

// let returnVal = people.push('Lady Gaga');
// console.log(people);
// console.log(returnVal);

// // >> .pop(value) -- to remove the last element of an array. It will return that element AND will change length of array
// // in Python, you could change the index -- in JS, you cannot. It will only remove last element 

// console.log(people)
// let elepop = people.pop();
// console.log(elepop); // Lady Gaga

// console.log(people); // List without Lady Gaga 


// // >> .unshift() -- adds the specified element to the beginning of an array and returns the new length of array (opposite of push)
// console.log(people);
// x = people.unshift('Lexie Young')
// console.log(people); // added to the beggining 

// // >> .shift() -- removes the first element from an array and returns the new length (opposite of pop)

// console.log(people);
// console.log(people.shift()); // returns 'Lexie Young', the removed element 
// console.log(people)


// // .indexOf() -- will return the index of the value in the arr or -1 if not present
// // will return the first instance, not all

// console.log(people.indexOf('Beyonce')); // 2
// console.log(people.indexOf('Bad Bunny')); // -1

// let nums = [10, 20, 15, 10, 12, 30, 20]

// console.log(nums.indexOf(20)); // 1; will only find first occurence
// console.log(nums.indexOf(20, 3)); // 6; we begin at index 3, looking for the index of the value 20 


// // .forEach(callbackFn) - will execute the callback funtion on each element, discarding return val
// // callbackFn is a function to execute for each element in an array - its return value is discarded

// people.forEach(function(element){console.log(element)});

// // >> ARRAY DESTRUCTURING 
// // JS allows us to declare multiple variables at a time and assign them members of the array 
// console.log(people);
// // similar to unpacking in python; declare multiple variables in key bracket

// let [tswift, harry, bey, billie] = people;
// console.log(tswift); 

// rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
// let [r, o, y] = rainbow;
// console.log(y);


// >> REST OPERATOR ....
// console.log(rainbow)
// let [red, orange, yellow, ...others] = rainbow;

// console.log(others)

// // .join() -- allows us to join 
// console.log(people.join(', '))

// let things = ['a', 'b', 'c']

// console.log(things.join('-'));

// >> ARRAY SLICING 
// .slice(start, end)
// in python, we have element[:::] (start, stop, step), i.e. things[1:3]
// in JS, this returns a shallow copy of a portion of an array into a new array object selected from stat to end (end not included) -- essentially you can take a portion of the array by its indices without modifying the original array 

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
// console.log(months);
// console.log(months.slice());
// console.log(months.slice(3)); // Apr - Jun (starting at 3rd index, going to end)
// console.log(months.slice(1, 4)); // Feb - Apr (starts at index 1 and ends (but not includes) index 4 )
// console.log(months.slice(-4)); // will start at index 4 and go backwards 

// // ** NO STEP WITH JS SLICING

// // >> ARRAY SPLICING (IN PLACE)
// // changes the contents of the array by removing or inserting items 
// // In place: modifies the original array 

// // .splice(start, deleteCount, item1, item2, ..., itemN)

// let fruits = ['apple', 'banana', 'peach', 'watermelon'];

// // Insert an item at an index position (not beginning or end)
// // To add 'pear' after banana in the fruits array:
// // start - 2
// // deleteCount - 0
// // item1 - 'pear'
// fruits.splice(2, 0, 'pear');
// console.log(fruits); // original has been modified

// // Insert an item at index position and remove item as well
// // to replace 'peach' with 'orange'
// // start - 3
// // deleteCount - 1
// // item1 - 'orange'
// fruits.splice(3, 1, 'orange');
// console.log(fruits);

// // Insert and/or remove multiple items
// // replace banana, pear, orange with kiwi, grapes, mango
// fruits.splice(1, 3, 'kiwi', 'grapes', 'mango');
// console.log(fruits);

// // >>> In-Class Exercise #1 <<< 
// /*
// Make an Array of your favorite foods. Then using the methods we have learned, add "Fried Tarantulas" to the end of the array, then add "Mokh Mchermel" to the front. Then, using a slice of the now modified array, print your original list of favorite foods without my additions.
// */

// let favFoods = ['coconut', 'banana', 'lasagna', 'cheetos']
// console.log(favFoods);

// favFoods.push('Fried Tarantulas');
// favFoods.unshift('Mokh Mchermel');
// console.log(favFoods);

// console.log(favFoods.slice(1, -1))



// ----------------------------------------------------------------------------
//  >> FUNCTIONS <<
// ----------------------------------------------------------------------------

// In Python: def function_name(parameters, ... )
// In JS: 
/* function functionName(parameters, ...) {
    code to execute
    }
*/ 

function addNums() {
    let num1 = 10
    let num2 = 20
    return num1 + num2
};

console.log(addNums); 

// To exexcute: functionName()

console.log(addNums());




/* In-Class Exercise 2:
Create a JS Function that takes a first name and last name and returns a String that says Hello first name last name. The input would be something like:
"Bo", "Jackson"
and the output would be:
"Hello Bo Jackson"
*/

function fullName(firstName, lastName){
    return `Hello ${firstName} ${lastName}`
}

console.log(fullName('Bo', 'Jackson'));


// >> ARROW FUNCTIONS 




// ----------------------------------------------------------------------------
//  >> FLOW CONTROL <<
// ----------------------------------------------------------------------------





// ----------------------------------------------------------------------------
//  >> OBJECTS <<
// ----------------------------------------------------------------------------