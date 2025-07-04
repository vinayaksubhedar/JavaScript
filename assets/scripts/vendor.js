const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const taskElement =document.getElementById('btn-taskElement');
const functionBtn = document.getElementById('btn-function');
const gameStartBtn = document.getElementById('btn-gameStart');


const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');


function outputResult(result1, text) {
  currentResultOutput.textContent = result1;
  currentCalculationOutput.textContent = text;
  userInput.value = 0;
  
}
