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

document.addEventListener('click', function(e){
    populateDisplay(e.target.id);
});

function populateDisplay(id){
    let display = document.getElementById("numpad");
    display.textContent += id;
    let displayContent = display.textContent;
    console.log(id);
    if(!isNaN(parseInt(id))){
        console.log("hello");
        //document.getElementById(id).disabled = true;
    }
}