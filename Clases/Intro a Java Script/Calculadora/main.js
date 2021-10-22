var screen = document.getElementById('screen-result');

function getData(num) {
let value = num.value;
screen.value = screen.value + value;
}

function cleans() {
screen.value = '';
}

function result() {
try {
screen.value = eval(screen.value);
} catch {

}
}