

/* i'd like to make these all variables, but i had trouble getting the html to respond
it initially. */
let clear = document.getElementById("clear");
let modelo = document.getElementById("modelo");
let divide = document.getElementById("divide");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let multiply = document.getElementById("multiply");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let subtract = document.getElementById("subtract");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let add = document.getElementById("plus");
let zero = document.getElementById("0");
let decimal = document.getElementById("decimal");
let clear2 = document.getElementById("clear2");
let display = document.getElementById("display").innerHTML;
let total = [];
let operation = [];
let result = display;
modelo.onclick = operate('%');
one.onclick = displayShow('1');
clear.onlick = clearLast;
clear2.onclick = clearItAll;
divide.onclick = operate('/');
multiply.onclick = operate('*');
subtract.onclick = operate('-');
add.onclick = operate('+');
decimal.onclick = displayShow('.');
equal.onclick = solve;
one.onclick = displayShow('1');
function displayShow(val) {
  if (display === "07734") {
    clearItAll();
  }
  if (display.length < 14) {
    return display += val;
  }
 }   
function clearLast() {
  return display = '';
}
function clearItAll() {
  return display = '';
  return total = [];
  return operation = [];
}
function boobless() {
  return display = 55378008;
}
function operate(val) {
  total.push(display);
  clearLast();
  display = val;
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
  total.push(display);
  let result = 0;
  for (let i = 0; i < operation.length; i++) {
    if (operation[0] === "*") { // this could be a switch statement instead.
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
    return display = parseFloat(result.toString().slice(0, 15));
      } else {
        return display = result;
   }
}
function cleanUp() {
  return total = [];
  return operation = [];
}
