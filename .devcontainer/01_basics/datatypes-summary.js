// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.3;
//console.log(typeof scoreValue);

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
//console.log(typeof outsideTemp);

const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(typeof id);
//console.log(typeof anotherId);

const bigNumber = 12345678910n;
//console.log(12345678910n);
//console.log(typeof bigNumber);

// console.log(id === anotherId); 


// Reference (Non primitive);

// Array, Object, Functions

const heros = ["Abu Bakar", "Omar", "Osman"];
let myObj = {
    name : "Nishad",
    age: 24,
}
//console.log(typeof heros);

const myFunction = function(){
    console.log("Hello world");
}
//console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "daudulislamnishad2";

let anothername = myYoutubename;
anothername = "imnishad";

//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "imnishad24@google.com";

//console.log(userOne.email);
//console.log(userTwo.email);