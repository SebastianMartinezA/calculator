let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayValue = '0';

window.addEventListener("keydown", async function (e){
    if(e.key === '*'){
        populateDisplay('x');
        const aux = document.getElementById('x');
        aux.classList.add('keyboard-hover');
        await sleep(100);
        aux.classList.remove('keyboard-hover');
    } else if(e.key === 'Enter'){
        populateDisplay('=');
        const aux = document.getElementById('=');
        aux.classList.add('keyboard-hover');
        await sleep(100);
        aux.classList.remove('keyboard-hover');
    } else {
        populateDisplay(e.key);
        const aux = document.getElementById(e.key);
        aux.classList.add('keyboard-hover');
        await sleep(100);
        aux.classList.remove('keyboard-hover');
    }
});

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('click', function(e){
    populateDisplay(e.target.id);
});

updateDisplay();

function populateDisplay(id){
    if(!isNaN(parseInt(id))){ // if its a number
        inputNumber(id);
        updateDisplay();
    } else if(id === "/" || id === "x" || // if its a operator
            id === "+" || id === "-"){
        inputOperator(id);
        updateDisplay();
    } else if(id === '='){ // if its the equal button
        inputEqual();
        updateDisplay();
    } else if(id === "."){ // if its the dot button
        inputDot(id);
        updateDisplay();
    } else if(id === '%'){ // if its the percentage button
        inputPercentage();
        updateDisplay();
    } else if(id === 'C'){ // if its the Clear button
        console.log("nose");
        clearDisplay();
        updateDisplay();
    } else if(id === 'Del'){
        inputDel();
        updateDisplay();
    }
}

function operate(op, a, b){
    if(op === '+'){
        return a + b;
    }else if(op === '-'){
        return a - b;
    }else if(op === 'x'){
        return a * b;
    }else if(op === '/'){
        if(b === 0){
            return 'oof';
        } else{
            return a / b;
        }
    }
}

function inputNumber(a){
    if(firstOperator === null){
        if(displayValue === '0' || displayValue === 0){
            displayValue = a;
        } else if(displayValue === firstNumber){
            displayValue = a;
        } else {
            displayValue += a;
        }
    } else {
        if(displayValue === firstNumber){
            displayValue = a;
        } else {
            displayValue += a;
        }
    }
}

function inputOperator(operator){
    if(firstOperator != null && secondOperator === null){
        secondOperator = operator;
        secondNumber = displayValue;
        result = operate(secondOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        displayValue = result;
        firstNumber = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null){
        secondNumber = displayValue;
        result = operate(secondOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        secondOperator = operator;
        displayValue = result;
        firstNumber = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstNumber = displayValue;
    }
}

function inputEqual(){
    if(firstOperator === null){
        displayValue = displayValue;
    } else if(secondOperator != null){
        secondNumber = displayValue;
        result = operate(firstOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        if(result === 'oof'){
            displayValue = result;
        } else {
            displayValue = fixdacommas(result);
            firstNumber = displayValue;
            secondOperator = null;
            secondNumber = null;
            firstOperator = null;
            result = null;
        }
    } else {
        secondNumber = displayValue;
        result = operate(firstOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        if(result === 'oof'){
            displayValue = result;
        } else {
            displayValue = fixdacommas(result);
            firstNumber = displayValue;
            secondOperator = null;
            secondNumber = null;
            firstOperator = null;
            result = null;
        }
    }
}

function updateDisplay(){
    let display = document.getElementById("numpad"); //gets the numpad element
    display.textContent = displayValue;
    if(displayValue.toString().length > 9){
        console.log("long boi");
        display.textContent = displayValue.toString().substring(0, 10);
    }
}

function clearDisplay(){
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    displayValue = '0';
}

function inputDot(a){
    if(displayValue === firstNumber || displayValue === secondNumber){
        displayValue = '0';
        displayValue += '.';
    } else if(!displayValue.includes('.')){
        displayValue += '.';
    }
}

function inputDel(){
    let displayX = displayValue.toString();
    if(displayX.length > 1){
        displayValue = displayX.slice(0, -1);
    } else {
        displayValue = 0;
    }
}

function fixdacommas(num){
    let aux = num.toString();
    if(aux.length > 10){
        return parseFloat(aux.substring(0,10));
    }
    else
        return num;
}