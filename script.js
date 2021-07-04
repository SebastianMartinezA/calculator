let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let displayValue = '0';

updateDisplay();

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

document.addEventListener('click', function(e){
    populateDisplay(e.target.id);
});

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
    if(displayValue.length > 9){
        display.textContent = displayValue.substring(0, 10);
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