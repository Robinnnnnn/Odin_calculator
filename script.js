let buttons = document.getElementsByClassName('buttons');
let buttonId = "btn0";
let buttonsInput;
let btntext;
let input = "0";


//returns the id of the button that was clicked.
function getId() {

    buttonId = event.target.getAttribute('id');

    getInput();

}

//returns innertext of the button that was clicked.
function getInput() {
    buttonsInput = document.getElementById(buttonId);
    if (input === "0") {
        input = buttonsInput.textContent;
    } else {
        input = input + buttonsInput.textContent;
    }

    displayToScreen();
}

//displays inut to screen
function displayToScreen() {
    let screen = document.getElementById('calcText');
    if (input.match(/\/0/)) {
        input = "ERROR. !/0"
        screen.textContent = `${input}`;
    } else {
        screen.textContent = `${input}`;
    }

}

//clears screen to 0
function clearInput() {
    input = "0";
    displayToScreen();
}

function equals() {
    let screen = document.getElementById('calcText');
    let answer = eval(input).toFixed(2);
    let answerSplit = answer.toString().split(".");
    if (answerSplit[1] === "00") {
        input = parseInt(answerSplit[0]);
    } else {
        input = answer;
    }
    screen.textContent = `${input}`;

}


function operate(operator, num1, num2) {

}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}