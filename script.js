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
    screen.textContent = `${input}`;
}

function doWork() {
    getId();

}

function clearInput() {
    input = "0";
    displayToScreen();
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