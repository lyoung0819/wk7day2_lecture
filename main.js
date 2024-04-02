console.log('Hello this is the main.js')


// ----------------------------------------------------------------------------
//  >> BOOLEANS <<
// ----------------------------------------------------------------------------

var myBool1 = true;
console.log(myBool1, typeof myBool1);

var myBool2 = false;
console.log(myBool2, typeof myBool2);

console.log('NEGATE A BOOLEAN')
// >> NEGATE a boolean
console.log(!true); // false
console.log(!false); // true


console.log('CONVERTING TO BOOLEANS')
// Converting to Booleans
// use the Boolean() constructor
var firstName = 'Brian';
console.log(Boolean(firstName)); // true - non empty strings evaluate to true

var emptyString = '';
console.log(Boolean(emptyString)); // false - empty strings are considered false

var someNumber = 55;
console.log(Boolean(someNumber)); // true - all non-0 numbers eval to true

var zeroNum = 0
console.log(Boolean(zeroNum)); // false - all 0 numbers are false

// ** Undefined and Null will always be false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false



console.log('DOUBLE NEGATION')
// >> DOUBLE NEGATION
// Common tactic for converting to bool
console.log(firstName);
// Use a single ! to give the opposite that we would get from bassing into Boolean 
console.log(!firstName); // false (the '!' flips the boolean value, and it is then converted in a bool)

// Use double !! to negate the origin negation
console.log(!!firstName); // true 



console.log('CHAINING BOOLEANS')
// >> CHAINING BOOLEANS
// In python, we can use 'and',  'or' -- in JS, we use && and || 
console.log(true || true);
console.log(true || false);

console.log('with || or');
console.log('with && or');

console.log(true && true);


//  ---------
console.clear()
//  ---------


console.log('SHORT CIRCUITING')
// >> SHORT CIRCUITING 

function t1(){
    console.log('t1 is running');
    return false;
}

function t2(){
    console.log('t2 is running');
    return false;
}

function t3(){
    console.log('t3 is running');
    return true;
}

// When using the && operator, once an expression returns false, no follow code is run
t1()&&t2() // just see 't1 is running'

t3()&&t2() // returns 't3 is running' 't2 is running' 

// It will run the full expression until it sees a return false

// When using the || operator, once something return true, no following expressions are ran 
t3()||t2() // just see t3 is running, because after it sees variable 1 is true, it stops 




// ----------------------------------------------------------------------------
//  >> NULL v UNDEFINED <<
// ----------------------------------------------------------------------------

// Undefined - means that the variable was declared, but not given a value
// Null - is a value and can be assigned to represent no value 
var myUndefined1;
var myNull = null; 

console.log(myUndefined1);
console.log(myNull); 
console.log('types:\n')

console.log(typeof myUndefined1); // undefined
console.log(typeof myNull); // object ! Why do we get object?
//  This is a KNOWN bug in JS! 




// ----------------------------------------------------------------------------
//  >> LET & CONST <<
// ----------------------------------------------------------------------------

