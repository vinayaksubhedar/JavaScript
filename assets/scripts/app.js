// //alert('This works!');
// /* Intro */ 
// //console.log("Hello Brother");

// /* Variables - is a data container where value can change*/
// /* Const - is a data container where value does not change*/
// // --Allowed naming conventions
// //--Not Allowed naming conventions

// //Variable 
// let currentResult = 0;
// let valueEnteredFirst = 12;
// let valueEnteredSecond = 2;

// //Constants
// const pi = 3.76


// // Operators + - * / %
// currentResult = valueEnteredFirst + valueEnteredSecond;
// console.log("+", currentResult);
// currentResult = valueEnteredFirst - valueEnteredSecond;
// console.log("-", currentResult);
// currentResult = valueEnteredFirst * valueEnteredSecond;
// console.log("*", currentResult);
// currentResult = valueEnteredFirst / valueEnteredSecond;
// console.log("/", currentResult);
// currentResult = valueEnteredFirst % valueEnteredSecond;
// console.log("%", currentResult);
// currentResult = valueEnteredFirst ** valueEnteredSecond;
// console.log("**", currentResult);

// //pedmas : Parentesis, exponential, division, multiplication, addition, substractions

// /* Data Types*/
// /*
// Numbers 2
// String(Text)  "Vinayak" 'Vinayak'
// Use of '
// User of "

// */
// //Template Literal - Allows you to concat string with variables and allow you to write on multiple lines
// let message;
// message = `Sum of ${valueEnteredFirst} and ${valueEnteredSecond} is ${currentResult}`;
// console.log(message);

// //new Line \n \\ \" \'
// message = message + "\nI love javascript. \"Javascript offeres us such escape characters\"";
// console.log(message);



// // Assignment
// let userInputEntered = 10;
// let result;
// result = userInputEntered + 18;
// let strMsg = `userInputEntered ${userInputEntered}. result is ${result} Initially`;
// // result = result - userInputEntered;
// // console.log(`userInputEntered ${userInputEntered}. result is ${result} -`);
// // result = result * userInputEntered;
// // console.log(`userInputEntered ${userInputEntered}. result is ${result} *`);
// // result = result / userInputEntered;
// // console.log(`userInputEntered ${userInputEntered}. result is ${result} /`);


// //Functions :

// function calculator(num1, num2, operator)
// {
//     if (operator=="+")
//     {
//         return num1 + num2;
//     }else if(operator=="-"){
//          return num1 - num2;
//     }else if(operator=="*"){
//          return num1 * num2;
//     }else if(operator=="/"){
//          return num1 / num2;
//     }else{
//         return 0;
//     }
    
// }
// //let calculatorResult = 0;




// //outputResult(result,strMsg);






//Converting Data type
//parseInt
//pasreFloat
//.toString()
//Adding + before variable to convert from string to Number. 
/*
let var1 = "10"; 
+var1
*/

//Comments
// Single Line Comment
/* Multi line comment */

//More Operators 
/*
--
++
**
-=
+=
*/
//Data Types
/*
Numbers
String
Boolean
objects
Arrays
*/

//Array
let logEntries = [];

function addLogEntry(result,operator,num1,num2)
{
  logEntries.push(
  {
    "result": result, "currentOperator": operator,"previousResult": num1,"currentInputValue": num2
  });
}


//Objects



// Program Start
//outputResult(currentResult, '');
//let result;
//let currentResult = parseInt(currentResultOutput.textContent) || 0;

function fnCurrentResult()
{
   return parseInt(currentResultOutput.textContent) || 0
}
function fnUserInput()
{
   return parseInt(userInput.value) || 0
}
addBtn.addEventListener("click",()=>{
  processCalculations(fnCurrentResult(),fnUserInput(),"+");
})
subtractBtn.addEventListener("click",()=>{
  processCalculations(fnCurrentResult(),fnUserInput(),"-");
})
multiplyBtn.addEventListener("click",()=>{
  processCalculations(fnCurrentResult(),fnUserInput(),"*");
})
divideBtn.addEventListener("click",()=>{
  processCalculations(fnCurrentResult(),fnUserInput(),"/");
})

function processCalculations(num1, num2, operator)
{
  result = calculator(num1,num2,operator);
  outputResult(result, operator);
  addLogEntry(result,operator,num1,num2)
  //logEntries.push({"result": result, "currentOperator": operator,"previousResult": num1,"currentInputValue": num2});
  //console.log("logEntries",logEntries);
  //console.log(logEntries[logEntries.length-1].currentOperator);
  userInput.value = 0;
}

function calculator(num1, num2, operator)
{
    if (operator=="+")
    {
        return num1 + num2;
    }else if(operator=="-"){
         return num1 - num2;
    }else if(operator=="*"){
         return num1 * num2;
    }else if(operator=="/"){
         return num1 / num2;
    }else{
        return 0;
    }
    
}

function subtract(num1,num2)
{
  return num1 - num2;
}

function stringify(num)
{
  return `"Result: ${num}"`;
}

function double(num)
{
    return num * 2;
}

function transform(num,fun)
{
    return fun(num)
}

let t = transform(20,double);
//console.log(t);
// Global Scope and Local scope

/* 
Calling functions on event listener. It it takes user data(arguments) then use lamda function like
() => funcname(args1,args2)
 */


// Assignment
function alretMessage(name)
{
  alert(`Hi, This is ${name}. Calling from \"alertMessage\" function`);
}
//alretMessage();

function alretNUM(num1)
{
  alert(`Hi, This is Vinayak. Calling from "alertNUM" function, You have passed ${num1}`);
}

//alretNUM(50)

function fnConcat(str1,str2,str3){
  alert(`${str1} ${str2} ${str3}`);
}


taskElement.addEventListener("click",() => fnConcat("Disha","Udaykumar","Parmar"));
//Program Ends

//Assignment
let numbers = [10, 3, -1];

function solve(numbers,num1,num2) {
   let newNumber = []
   newNumber = [...numbers]
   newNumber.push(num1)
   newNumber.push(num2)
   return newNumber
}

let myarray = solve(numbers,8,10);

//console.log("myarray",myarray)

//Objects
//Assignment
let courseData = 
{
    "title":"JavaScript - The Complete Guide",
    "duration": 30,
    "levels" : ["Beginner","Advanced"]
}


// undefined, null NaN

//typeOf
let myvar;
myvar = 9
printType(myvar);
myvar = 9.5
printType(myvar);
myvar = "9"
printType(myvar);
myvar = (9 > 8)
printType(myvar);
myvar = [9,8]
printType(myvar);
myvar = {num1:9,num2:8};
printType(myvar);
myvar = null
printType(myvar);
myvar = 21 * "Hi" 
printType(myvar);
let myvar1
printType(myvar1);

function printType(myvar)
{
    console.log(`${myvar} is of type ${typeof(myvar)}`);
}

// defer in script tag to load early to execute late.

/*
always load scripts inhead section with defer keyword for performance
    <script src="assets/scripts/vendor.js" defer></script>
    <script src="assets/scripts/app.js" defer></script>

    <script src="assets/scripts/vendor.js" async></script>
    <script src="assets/scripts/app.js" async></script>
  */

    /* Module II */
    
//
/*
==
!=
===
!==
<>
>= 
<=
!
*/

/*    Control flow     */
console.log("Call from App_2_flow_control.js");

function fetchvalue(userInput)
{
    return parseInt(userInput.value || 0);
}
function fetchCurrentResult()
{
     return parseInt(currentResultOutput.textContent || 0);
}

addBtn.addEventListener('click',() => {
    outputResult(calculator(fetchCurrentResult(),fetchvalue(userInput),'+'), '+');
});

subtractBtn.addEventListener('click',() => {
    outputResult(calculator(fetchCurrentResult(),fetchvalue(userInput),'-'), '-');
});
multiplyBtn.addEventListener('click',() => {
    outputResult(calculator(fetchCurrentResult(),fetchvalue(userInput),'*'), '*');
});
divideBtn.addEventListener('click',() => {
    outputResult(calculator(fetchCurrentResult(),fetchvalue(userInput),'/'), '/');
});


function calculator(num1,num2,operator1)
{
    if (operator1==='+')
    {
        return num1 + num2;
    }
    if (operator1==='-')
    {
        return num1 - num2;
    }
    if (operator1==='*')
    {
        return num1 * num2;
    }
    if (operator1==='/')
    {
        return num1 / num2;
    }
    
}

//let result = 0;

//Assignment
let userCategory; // should be 'child', 'adult' or 'senior'
let age = 65;

function solve(passedAge) {
    if (passedAge < 18)
    { 
        return "child";
    }
    else if (passedAge > 17 && passedAge < 65)
    {
        return "adult";
    } else{
          return "senior";
    }
}

userCategory = solve(age);
//console.log(userCategory);


//Equality Comparator works differently.
//Object and Arrays:
person1 = {name:"Vinayak"};
person2 = {name:"Vinayak"};

friends2024 = ["Vinayak","Disha"];
friends2025 = ["Vinayak","Disha"];

//If we are comparing objects having same key value pair. It is still not showing equal
//why ?
console.log("person1 === person2", person1 === person2);
console.log("person1.name === person2.name", person1.name === person2.name);

console.log("friends2024===friends2025",friends2024===friends2025);
console.log("friends2024[0]===friends2025[0]",friends2024[0]===friends2025[0]);


// Logical Operators

/*
&&
||
!
*/

//Operator precedence : pedmas



//False && truthy
/*
if (name==='vinayak'){}

if(name){}



*/
//if we are using any numeric value in if check, if that value is 0/uninitialized/null then it will written false
let checkBoolena;
if (checkBoolena){
  console.log("checkBoolena is true");
}else{
  console.log("checkBoolena is false");
}


/* Ternery Oprator */
let checkTernaryResult = false;
checkTernaryResult ? console.log("checkTernaryResult is true"):console.log("checkTernaryResult is false")
let myname='Vinayak'; if (!!myname){console.log(myname)}else{console.log('Name not mentioned')};
/* statemnt vs Expressions */
//Written something on right side is expression

//Ternery Operators tricks
/*
!! - Very useful {let name='Vinayak'; if (!!name){console.log(name)}else{console.log('Name not mentioned')};}
|| - let name = document.getElementbyID('abc').value || 'Vinayak'
|| - let name = document.getElementbyID('abc').value && 'Vinayak'
*/

/* Switch Case statement */
let result = 'Vinayak'

switch(result)
{
  case 'Vinayak':
    console.log('Vinayak');
    break;
  case 'Disha':
    console.log('Disha');
    break;
  case 'Reyaansh':
    console.log('Reyaansh');
    break;
  case 'Pankti':
    console.log('pankti');
    break;
  case 'Aarya':
    console.log('Aarya');
    break;
  default:
    console.log('No Record Found');
    //break;
}


/* loop */
/*
for loop
for-of loop - For Array
for-in loop - For Object
while loop
do while




*/

for(let i=1;i<=10;i++)
{
  console.log(`Looping running for ${i}`);
};

data = [
  {name:"Vinayak",designation:"Technical manager"},
  {name:"Disha",designation:"CEO"},
  {name:"Pravin",designation:"BI Manager"}
]

for (const record of data)
{
  //console.log(record.name);
}
for (const record in data)
{
  for(const key in data[record])
  {
    console.log(`${key}:${data[record][key]}`);
  }
}
let toRun = true;
let counter = 1;
// while(toRun){
//  // console.log("Counter in while loop",counter);
//   counter = counter + 1;
//   if (counter >10){
//     toRun = false;
//   }
// }


do{
  console.log(`Running do While loop for ${counter} time`);
  counter = counter + 1;
   if (counter >10){
    toRun = false;
   }
}while(toRun);

// break - Stop loop execution
// continue - Stop current iteration of the loop

//Very IMportant topic - Labled Loop to get control of our loop in the inner loops
outerloop : for(let i = 0; i < 10;i++)
{
  //console.log(i);
  let str = ''
  innerLoop : for (let j = 0; j<i;j++)
  {
    console.log(i,j);
    if (i > 5){
        break outerloop;
    } 
  }
  console.log(str);
  // console.log('\n');
}

let mynumber;
let mynumbersqr;
try{
    mynumber = parseInt(prompt("Please Enter a number to find square of it","100"));
    if (isNaN(mynumber)){throw {message:"Another Error"};}
    
}catch(error)
{
    console.log(error);
    mynumber = 100;
    //throw(error);
}
// }finally{
//         mynumber = 100;
// }

console.log("mynumber",mynumber);

// if (isNaN(mynumber))
// {
//     throw {message:"Invaid Input. Kindly enter number to find square."};
// }


// Assignment

function breakMe() {
    throw {message : "My new Error from breakMe"}
}

function main() {
    // Todo: Handle breakMe()'s error with grace
    try{
        breakMe();
    }catch(error)
    {
        console.log(error);
    }
    
}