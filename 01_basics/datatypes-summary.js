//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
   // console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack memory(Primitive), Heap memeory (Non-primitive) --> These are the two types of memory

// Heap mein original value mein change hoga whereas stack mein bas ek copy of the original data mei value change hoga


let myName = "Rakshit"


anotherName = myName



anotherName = "Sonu"

// console.log(anotherName)




