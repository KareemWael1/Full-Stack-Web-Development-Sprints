let input = document.getElementsByClassName("Operand");
let currentInput = input[0];
let buttons = document.getElementsByClassName("button");
let result = document.getElementById("result");
let operation;

buttons[0].addEventListener("click", function (){
    currentInput.value += "7";
})

buttons[1].addEventListener("click", function (){
    currentInput.value += "8";
})

buttons[2].addEventListener("click", function (){
    currentInput.value += "9";
})

buttons[3].addEventListener("click", function (){
    currentInput = input[1];
    operation = '/';
})

buttons[4].addEventListener("click", function (){
    currentInput.value += "4";
})

buttons[5].addEventListener("click", function (){
    currentInput.value += "5";
})

buttons[6].addEventListener("click", function (){
    currentInput.value += "6";
})

buttons[7].addEventListener("click", function (){
    currentInput = input[1];
    operation = '*';
})

buttons[8].addEventListener("click", function (){
    currentInput.value += "1";
})

buttons[9].addEventListener("click", function (){
    currentInput.value += "2";
})

buttons[10].addEventListener("click", function (){
    currentInput.value += "3";
})

buttons[11].addEventListener("click", function (){
    currentInput = input[1];
    operation = '-';
})

buttons[12].addEventListener("click", function (){
    currentInput.value += "0";
})

buttons[13].addEventListener("click", function (){
    currentInput.value += ".";
})

buttons[14].addEventListener("click", function (){
    switch (operation) {
        case '+':
            result.value = parseFloat(input[0].value) + parseFloat(input[1].value);
            break;
        case '-':
            result.value = parseFloat(input[0].value) - parseFloat(input[1].value);
            break;
        case '*':
            result.value = parseFloat(input[0].value) * parseFloat(input[1].value);
            break;
        case '/':
            result.value = parseFloat(input[0].value) / parseFloat(input[1].value);
            break;
    }
    input[0].value = "";
    input[1].value = "";
    currentInput = input[0];
})

buttons[15].addEventListener("click", function (){
    currentInput = input[1];
    operation = '+';
})