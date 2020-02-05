

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
noClue.addEventListener("click", () => display.innerHTML = `HI THERE!`);



function displayShow(val) {
    if (display.innerHTML === "07734") {
        clearItAll();
    }
    if (display.innerHTML.length < 14) {
        return display.innerHTML += val;
    }
}   
function clearLast() {
    return display.innerHTML = '';
}
function clearItAll() {
    display.innerHTML = '';
    total = [];
    operation = [];
}
function operate(val) {
    total.push(display.innerHTML);
    clearLast();
    display.innerHTML = val;
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
function solve() {
    total.push(display.innerHTML);
    let result = 0;
    for (let i = 0; i < operation.length; i++) {
        if (operation[0] === "*") {
            result += parseFloat(total[i]) * parseFloat(total[i + 1]);
            total.shift();
            operation.shift();
            total.push(result);
        } else if (operation[0] === "+") {
            result += parseFloat(total[i]) + parseFloat(total[i + 1]);
            total.shift();
            operation.shift();
            total.push(result);
        } else if (operation[0] === "-") {
            result += parseFloat(total[i]) - parseFloat(total[i + 1]);
                total.shift();
                operation.shift();
                total.push(result);
            
            } else if (operation[0] === "/") {
                result += parseFloat(total[i]) / parseFloat(total[i + 1]);
                total.shift();
                operation.shift();
                total.push(result);
            } else if ((parseFloat(total[i]) % parseFloat(total[i + 1])) === 0) {
                total.shift();
                operation.shift();
                total.push(result);
            } else {
                result += parseFloat(total[i]) % parseFloat(total[i + 1]);
                total.shift();
                operation.shift();
                total.push(result);
            }
        }
        cleanUp();
        if (result.toString().length > 15) {
            return display.innerHTML = parseFloat(result.toString().slice(0, 15));
        } else {
            return display.innerHTML = result;
    }
    function cleanUp() {
        total = [];
        operation = [];
    }
}