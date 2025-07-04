console.log("App Function is called");
/*
Different ways of Creating Functions
Ananymous Functions
Callback Functions & Function in Functions
Default Argument and Rest operator
*/

function fnSQR(numPassed) {
  return numPassed * numPassed;
}
let num = 25;
console.log(`Square of ${num} is ${fnSQR(num)}`);

/*
parameters vs Arguments:
Paramters - In above scenario, numPassed is Parameters. This is at a time of funtion defination
Arguments - In above scenario, num is argument which holds value 25. This is at a time of calling function
*/

/*
Functions vs Methods:
//If we are writing fucntion inside object is a method.
*/

const person = {
  firstName: "Vinayak",
  middleName: "Sadanand",
  lastName: "Subhedar",
  dob: new Date(1984, 6, 3),
  fullName: function () {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  age: function () {
    let todayDate = new Date();
    let yearDiff = todayDate.getFullYear() - this.dob.getFullYear();
    let monthDiff = todayDate.getMonth() - this.dob.getMonth();
    let dayDiff = todayDate.getDate() - this.dob.getDate();
    console.log(
      `This Year ${todayDate.getFullYear()}. Birth Year ${this.dob.getFullYear()}. Year Difference ${yearDiff}`
    );
    console.log(
      `This Month ${todayDate.getMonth()}. Birth Month ${this.dob.getMonth()}. Month Difference ${monthDiff}`
    );
    console.log(
      `This Day ${todayDate.getDate()}. Birth Day ${this.dob.getDate()}. Day Difference ${dayDiff}`
    );
    if (monthDiff > 0 || (monthDiff == 0 && dayDiff < 0)) {
      return yearDiff - 1;
    }
    return yearDiff;
  },
};

console.log(person.age());

console.log(fnSQR);
console.log(typeof fnSQR);
console.dir(fnSQR);
console.dirxml(fnSQR);

/*
Function Declaration vs Function Expression

Function Declaration    : Hoisted to the top. Can be declared anywhere;
Function Expression     : Hoisted to the top but not defined or initialized. 
                          Should be used after initalized.
*/

//Function Declaration
function clickfunc() {
  console.log("Function Button Clicked");
}

//Function Expresion
const clicker = function () {
  console.log("Function Button Clicked 1");
};
//Calling fucntion
functionBtn.addEventListener("click", clickfunc);
//Calling fucntion
functionBtn.addEventListener("click", clicker);
const strtGame = function () {
  let choices = ["Rock", "Paper", "Sceissor"];
  let userChoice =
    parseInt(
      prompt("Please Enter your choice 1:'Rock' 2:'Paper' 3:'Sceissor'")
    ) - 1;
  if (
    isNaN(userChoice) ||
    (userChoice != 0 && userChoice != 1 && userChoice != 2)
  ) {
    console.log("Invalid Response");
  } else {
    let systemNum = getRndInteger(0, 8);
    let systemChoice;
    if (systemNum == 0 || systemNum == 3 || systemNum == 6) {
      systemChoice = 0;
    } else if (systemNum == 1 || systemNum == 4 || systemNum == 7) {
      systemChoice = 1;
    } else if (systemNum == 2 || systemNum == 5 || systemNum == 8) {
      systemChoice = 2;
    }
    console.log("User Choice :", choices[userChoice]);
    console.log("System Choice :", choices[systemChoice]);

    //checkWinner(userChoice, systemChoice);
    checkWinnerArrow1(userChoice, systemChoice);
  }
};

function checkWinner(userChoice, systemChoice) {
  if (userChoice == systemChoice) {
    console.log("It's Tie");
  } else if (
    (userChoice == 0 && systemChoice == 2) ||
    (userChoice == 2 && systemChoice == 1) ||
    (userChoice == 1 && systemChoice == 0)
  ) {
    console.log("User Win");
  } else {
    console.log("System Win");
  }
}

//gameStartBtn.addEventListener('click',()=>{console.log('Game Starts')});
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
gameStartBtn.addEventListener("click", strtGame);
// ***** If error occured with ananymous function, it does not give function name. Difficult to find error.


/* Arrow Function */
 (a,b) => a+b;
 a => a*a;
 (a,b) => a>b?a:b;
 //For multiline function we have to use {}

const checkWinnerArrow = (userChoice, systemChoice) => {
    return (userChoice == systemChoice) ? 
    console.log("It's Tie"):
    ((userChoice == 0 && systemChoice == 2) ||
    (userChoice == 2 && systemChoice == 1) ||
    (userChoice == 1 && systemChoice == 0))? console.log("User Win"): console.log("System Win");
}

const checkWinnerArrow1 = (userChoice, systemChoice) => 
    (userChoice == systemChoice) ? 
    console.log("It's Tie"):
    ((userChoice == 0 && systemChoice == 2) ||
    (userChoice == 2 && systemChoice == 1) ||
    (userChoice == 1 && systemChoice == 0))? console.log("User Win"): console.log("System Win");

    
const checkArrow = (msg) => (msg + msg);

let abc = checkArrow("vinayak");

console.log(abc);

/***
Function with Default Argument
 */

function upperValue(value1, uppoerValue=5)
{
    return value1 * uppoerValue
}

let a =upperValue(10,4);
let b =upperValue(10);

console.log(`a : ${a} \n b : ${b}`);

// Rest Operators


function sumUp(...numbers){
  let sumup = 0;
  for (let number of numbers)
  {
    sumup += number;
  }
  return sumup
}

//Using Arguments
const sumUpFunction = function(){
  let sumup = 0;
  for (let number of arguments)
  {
    sumup += number;
  }
  return sumup
}

// const sumUpArrow = ()=>{
//   let sumup = 0;
//   for (let number of arguments) // Do not use this.
//   {
//     sumup += number;
//   }
//   return sumup
// }
/*** Use Rest operator over argument to have more readable script*/
console.log(sumUp(1,2,3,9,8,7));
console.log(sumUpFunction(1,2,3,9,8,7));
//console.log(sumUpArrow(1,2,3,9,8,7));


/* Function inside function */
const summingFunction = function(...numbers){
  const validateNumber = (num) => isNaN(num) ? 0 : num; 
  
  let sumup = 0;
  for(let number of numbers){
    sumup = sumup + validateNumber(number);
  }
  return sumup
}

console.log(summingFunction(9,8,7,'Disha'));


// callback functions;
const summingFunctionCB = function(cb,...numbers){
  const validateNumber = (num) => isNaN(num) ? 0 : num; 
  
  let sumup = 0;
  for(let number of numbers){
    sumup = sumup + validateNumber(number);
  }
  cb(sumup);
}

const myFirstCallBack = (sumup) => { console.log("Printing Sum from Callback",sumup);}

summingFunctionCB(myFirstCallBack,9,8,7,'Disha');


/* Bind */

function cb(message,result) {
  console.log(`${message} is ${result}`);
};

const calculatorCB = function(param1, param2,operation,cb){
  let result;
  const validator = (param) => isNaN(param)? 0:param;
  if (operation === '+')
  {
    cb(validator(param1) + validator(param2));
  }
   if (operation === '-')
  {
    cb(validator(param1) - validator(param2));
  }
  if (operation === '*')
  {
    cb(validator(param1) * validator(param2));
  }
  if (operation === '/')
  {
    cb(validator(param1) / validator(param2));
  }
};



calculatorCB(5,4,'+',cb.bind(this,"Addition"));
calculatorCB(5,4,'-',cb.bind(this,"Subtraction"));
calculatorCB(5,4,'*',cb.bind(this,"Multiplication"));
calculatorCB(5,4,'/',cb.bind(this,"Division"));


/* Apply and Call */