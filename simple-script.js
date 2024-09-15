// Simple
const displaySimple = document.getElementById('displaySimple');

function appendTodisplaySimple (input) {
    displaySimple.value += input;
}

function calculateSimple () {
    try {
        displaySimple.value = eval(displaySimple.value );
    } catch(error) {
        displaySimple.value = Error;
    }
}

function cleardisplaySimple () {
    displaySimple.value = '';
}
