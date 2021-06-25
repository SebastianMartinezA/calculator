function operate(operator, a, b){
    switch(operator){
        case 0:
            add(a,b);
        case 1:
            subtract(a,b);
        case 2:
            multiply(a,b);
        case 3:
            divide(a,b);
    }
}

function add(a, b){
    return a+b;
}


function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}