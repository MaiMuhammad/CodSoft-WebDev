let screen = document.getElementById("ouput")

function display(num) {
    screen.value += num;
}

function calc() {
    let value = screen.value
        .replace('x', '*')
        .replace('÷', '/')
        .replace('%', '*0.01'); // Interpret % as multiplication by 0.01
    screen.value = eval(value);
}

function Clear() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0, -1);
}