

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
let result = display.innerHTML;

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
decimal.addEventListener("click", () => displayShow('.'));
noClue.addEventListener("click", () => {
    clearItAll();
    display.innerHTML = "HI THERE!";

});

let start = false;

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
        console.log("triggered!");
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
    let result = 0;
    while (operation.length > 0) {
        if (operation[0] === "*") {
            if (start === false) {
                result += parseFloat(total[0]) * parseFloat(total[1]);
                console.log(total);
                total.splice(0, 2);
                operation.shift();
                console.log(total);
                console.log(operation);
                start = true;
            } else {
                result *= parseFloat(total[0]);
                total.shift();
                operation.shift();
            }
            
        } else if (operation[0] === "/") {
            if (start === false) {
                result += parseFloat(total[0]) / parseFloat(total[1]);
                console.log(total);
                total.splice(0, 2);
                operation.shift();
                console.log(total);
                console.log(operation);
                start = true;
            } else {
                result /= parseFloat(total[0]);
                total.shift();
                operation.shift();
            }
            
        } else if (operation[0] === "-") {
            if (start === false) {
                result += parseFloat(total[0]) - parseFloat(total[1]);
                console.log(total);
                console.log(operation);
                total.splice(0, 2);
                operation.shift();
                console.log(total);
                console.log(operation);
                start = true;
            } else {
                result -= parseFloat(total[0]);
                total.shift();
                operation.shift();
            }

        } else if (operation[0] === "+") {
            if (start === false) {
                result += parseFloat(total[0]) + parseFloat(total[1]);
                console.log(total);
                total.splice(0, 2);
                operation.shift();
                console.log(total);
                console.log(operation);
                start = true;
            } else {
                result += parseFloat(total[0]);
                total.shift();
                operation.shift();
            }
            
        } else {
            if (start === false) {
                result += parseFloat(total[0]) % parseFloat(total[1]);
                console.log(total);
                total.splice(0, 2);
                operation.shift();
                console.log(total);
                console.log(operation);
                start = true;
            } else {
                result %= parseFloat(total[0]);
                total.shift();
                operation.shift();
            }
        }
        
    }
    cleanUp();
    if (result.toString().length > 14) {
        display.innerHTML = result.toExponential(8);

    } else {

        display.innerHTML = result;
    }
    function cleanUp() {
        start = false;
        total = [];
        operation = [];
        console.log("this is happening clean up");
    }
}