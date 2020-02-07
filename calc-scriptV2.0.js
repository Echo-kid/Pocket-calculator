

const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const zeroButton = document.getElementById("0");
const divideButton = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const addButton = document.getElementById("plus");
const multiplyButton = document.getElementById("multiply");
const subtractButton = document.getElementById("subtract");
const modeloButton = document.getElementById("modelo");
const clear2 = document.getElementById("clear2");
const decimal = document.getElementById("decimal");
const noClue = document.getElementById("noClue");

let display = document.getElementById("display");
let total = [];
let operation = [];


oneButton.addEventListener("click", () => displayShow('1'));
twoButton.addEventListener("click", () => displayShow('2'));
threeButton.addEventListener("click", () => displayShow('3'));
fourButton.addEventListener("click" ,() => displayShow('4'));
fiveButton.addEventListener("click", () => displayShow('5'));
sixButton.addEventListener("click", () => displayShow('6'));
sevenButton.addEventListener("click", () => displayShow('7'));
eightButton.addEventListener("click", () => displayShow('8'));
nineButton.addEventListener("click", () => displayShow('9'));
zeroButton.addEventListener("click", () => displayShow('0'));

clear.addEventListener("click", clearLast);
clear2.addEventListener("click", clearItAll);
equal.addEventListener("click", solve);
divideButton.addEventListener("click", () => operate('/'));
modeloButton.addEventListener("click", () => operate('%'));
addButton.addEventListener("click", () => operate('+'));
subtractButton.addEventListener("click", () => operate('-'));
multiplyButton.addEventListener("click", () => operate('*'));
decimal.addEventListener("click", () => {
    let displayArr = display.innerHTML.split("");
    if (displayArr[displayArr.length - 1] !== ".") {
        displayShow('.');
    }
});

noClue.addEventListener("click", () => {
    clearItAll();
    display.innerHTML = "HI THERE!";

});

function displayShow(val) {
    if (display.innerHTML === "07734") {
        clearItAll();
    }
    if (display.innerHTML === "HI THERE!") {
        clearItAll();
    }
    if (display.innerHTML.length < 14) {
        display.innerHTML += val;
    }
}

function clearLast() {
    display.innerHTML = '';
}

function clearItAll() {
    display.innerHTML = '';
    total = [];
    operation = [];
}

function operate(val) {
    if (display.innerHTML === "07734" || display.innerHTML === "HI THERE!") {
        clearItAll();
    }
    if (display.innerHTML !== '') {
        total.push(display.innerHTML);
    }
    clearLast();
    if (total.length !== 0 && operation.length < total.length) {
        switch (val) {
            case '+':
                operation.push('+');
                clearLast();
                break;
            case '-':
                operation.push('-');
                clearLast();
                break;
            case '*':
                operation.push('*');
                clearLast();
                break;
            case '/':
                operation.push('/');
                clearLast();
                break;
            case '%':
                operation.push('%');
                clearLast();
                break;
        }
    }
}

function solve() {
    total.push(display.innerHTML);
    total = total.map(num => parseFloat(num));
    while (operation.indexOf("*") !== -1) {
        let multIndex = operation.indexOf("*")
        let temp =  total[multIndex] * total[multIndex + 1]
        total.splice(multIndex, 2, temp);
        operation.splice(multIndex, 1)
    }
    while (operation.indexOf("/") !== -1) {
        let divIndex = operation.indexOf("/")
        let temp =  total[divIndex] / total[divIndex + 1]
        total.splice(divIndex, 2, temp);
        operation.splice(divIndex, 1);
    }
    while (operation.indexOf("%") !== -1) {
        let modeloIndex = operation.indexOf("%")
        let temp =  total[modeloIndex] % total[modeloIndex + 1]
        total.splice(modeloIndex, 2, temp);
        operation.splice(modeloIndex, 1);
    }
    while (operation.indexOf("+") !== -1) {
        let addIndex = operation.indexOf("+")
        let temp =  total[addIndex] + total[addIndex + 1]
        total.splice(addIndex, 2, temp);
        operation.splice(addIndex, 1);
    }
    while (operation.indexOf("-") !== -1) {
        let subIndex = operation.indexOf("-")
        let temp =  total[subIndex] - total[subIndex + 1]
        total.splice(subIndex, 2, temp);
        operation.splice(subIndex, 1);
    }
    if (total.toString().length > 14) {
        display.innerHTML = total[0].toExponential(8);
    } else {
        display.innerHTML = total;
    }
    cleanUp();
    function cleanUp() {
        total = [];
        operation = [];
    }
}