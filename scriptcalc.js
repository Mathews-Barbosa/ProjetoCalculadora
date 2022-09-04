function calculate() {
    let display = document.getElementById('display');
    display.value = eval(display.value);
}

function add(operator) {
    let display = document.getElementById('display');
    display.value = display.value + operator;
}

 

function clean() {
    document.getElementById('display').value = '';
}
