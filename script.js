let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let result = null;
let displayValue = 0;

updateDisplay();

function operate(op, a, b){
    if(op === '+'){
        return a + b;
    }else if(op == '-'){
        return a - b;
    }else if(op == '*'){
        return a * b;
    }else if(op == '/'){
        return a / b;
    }
}

document.addEventListener('click', function(e){
    populateDisplay(e.target.id);
});

function populateDisplay(id){
    if(firstOperator === null && (isNaN(parseInt(id)))){
        firstOperator = id;
    }
    else{
        if(firstOperator!=null){
            if(id === "="){
                result = operate(firstOperator, parseInt(firstNumber), parseInt(secondNumber));
                displayValue = result;
                updateDisplay();
            }
            else{
                secondNumber = id;
                displayValue = secondNumber;
                updateDisplay();
            }
        }
        else{
            firstNumber = id;
            displayValue = firstNumber;
            updateDisplay();
        }
    }
}

function updateDisplay(){
    let display = document.getElementById("numpad"); //gets the numpad element
    display.textContent = displayValue;
}