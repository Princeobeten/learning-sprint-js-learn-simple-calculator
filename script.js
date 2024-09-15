// Advance
const display = document.getElementById('display');
const history = document.getElementById('history');
let memoryValue = 0;

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        history.textContent = display.value + ' =';
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

function clearAll() {
    display.value = '';
    history.textContent = '';
}

function clearEntry() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if(display.value !== '' && display.value !== '0') {
        display.value = display.value.charAt(0) === '-' ? 
            display.value.slice(1) : '-' + display.value;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(/[0-9\+\-\*\/\.\=]/.test(key)) {
        event.preventDefault();
        if(key === '=') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if(key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if(key === 'Backspace') {
        event.preventDefault();
        backspace();
    } else if(key === 'Escape') {
        event.preventDefault();
        clearAll();
    }
});