var userNumber1 = parseInt(prompt("Introduce un numero entre 1 y 50"));
var userNumber2 = parseInt(prompt("Introduce otro numero entre 1 y 50"));
var i = 1;
var miArreglo = [];

while (i < 51) {
    miArreglo.push(i);
    i++;
}

if (userNumber1 == 34 || userNumber2 == 34) {
    miArreglo.splice(33,1,"¡Lotería!");
} 

if (userNumber1 == 26 || userNumber2 == 26) {
    miArreglo.splice(25,1,"¡Lotería!");
}

document.write(miArreglo);
