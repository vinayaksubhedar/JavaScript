"use strict"
console.log("You are in ES5 and ES6");
console.log("ECMA Scripts");
console.log("Ecma International Technical Committee 39 (TC39)");

console.log("Var vs let vs const");

console.log('Do not use var anymore. Let anb const has block scope')

console.log('hoisting - Search entire script to check wether variable is defined.');
//Check below code with let and then with var
//console.log(name); //Var gives "undefined"(hoisting). Let gives "Error". Clean coding with let.
let name = 'Vinayak';
let newname = "Disha";
console.log(`"use strict"`); //"use strict" make sure you define variable using let and constant using const.

console.log("https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef");
console.log("https://firefox-source-docs.mozilla.org/js/index.html");

console.log("JS Code => InterePreter => sends byte data => Compliler(Jit- Just in time) =>Computer");

console.log("Memory Allocation");
console.log("Memory Allocation - Heap - Memory Allocation - Store Data in your system memory and manages access to it");
console.log("Memory Allocation - Stack - Execution Context - Manages program flow (function calls and communication)");


console.log('Premitive and Reference')
/*
Premitive Values
String
Number
Booleans
NULL
Undefined
Symbol

Stored in memory (normally on stack) variables store values itself.
*/
/*
-- Reference values
All Objects
Stored in heap
Storws pointer for memory.

****
*/
let mainlist = ['Vinayak','Disha'];
let copylist = mainlist;
mainlist.push('Pravin');
console.log(mainlist);
console.log(copylist);


let copylist1 = [...mainlist];
mainlist.push('Reyaansh');
console.log(mainlist);
console.log(copylist1);

//Even though hobbies is constant, it allows us to add values to array(push value) 
//Assignment is not allowed but push is allowed
const hobbies = ['Cricket'];
console.log(hobbies);
hobbies.push('Hockey');
console.log(hobbies);


//Garbage Collection and Memory Allocation
//Create functions rather than using anonymous in event listners.


