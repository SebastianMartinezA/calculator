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
    let display = document.getElementById("numpad"); //gets the numpad element
    
    if(isNaN(parseInt(id))){ // if its not a number enters
        display.textContent += " " + id + " ";
        document.getElementById("x").disabled = true;
        document.getElementById("/").disabled = true;
        document.getElementById("+").disabled = true;
        document.getElementById("-").disabled = true;
    }
    else{   // else if it is a number entes and adds to display text
        display.textContent += id;
    }

    let displayContent = display.textContent; // saves display value
    console.log(displayContent);
}