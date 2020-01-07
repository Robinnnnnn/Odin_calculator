let buttons = document.getElementsByClassName('buttons');
let buttonId = "btn0";
let buttonsInput;
let btntext;
let input = "0";
let body = document.getElementById("abody");
let modeTracker = 0;
let screen = document.getElementById('calcText');


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

//reports answer to screen
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

function modes() {

    if (modeTracker === 0) {
        abody.style.backgroundColor = "rgb(2, 65, 57)";
        screen.style.backgroundColor = "#0f3e40";
        screen.style.color = "White";
        modeTracker = 1;
    } else if (modeTracker === 1) {
        abody.style.backgroundColor = "aquamarine";
        screen.style.backgroundColor = "cadetblue";
        screen.style.color = "black";
        modeTracker = 0;
    }
}