let isOpenBracket = true;
let input = '';
let lastOperator = '';

function toggleBracket() {
    const display = document.querySelector('#display');

    if (isOpenBracket) {
        display.value += '(';
        input += '(';
    } else {
        display.value += ')';
        input += ')';
    }

    isOpenBracket = !isOpenBracket;
}

function appendOperator(operator) {
    const display = document.querySelector('#display');
    const operators = ['/', '*', '-', '+'];

    // If the last character in the display is an operator, replace it with the new operator
    if (operators.includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }

    lastOperator = operator;
}

function appendDot() {
    const display = document.querySelector('#display');

    // Check if the display already contains a dot
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}
