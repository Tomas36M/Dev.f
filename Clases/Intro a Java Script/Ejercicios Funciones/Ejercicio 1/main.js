// Ejercicio 1
var celsius = 32;

function convertidorCelciusFahrenheit (celsius) {
    var resultado = celsius * 9/5.0 + 32;

    return resultado;
}

function convertidorFahrenheitCelcius (fahrenheit) {
    var resultado = (fahrenheit - 32) * 9/5.0;

    return resultado;
}

var resultado = convertidorCelciusFahrenheit(celsius);

console.log(`Ejercicio 1: ${celsius}ºC = ${resultado}°F `)

// Ejercicio 2
// Hacer una función que muestre la tabla de multiplicar de un número                                  */
function multiplicador() {
    var userNumber = parseInt(prompt("Introduce un numero"));

    for (var i = 1; i <= 10; i++) {
        multiplicador = userNumber * i;
        console.log(`Ejercicio 2: La tabla de multiplicar de ${userNumber} es: ${i} * ${userNumber} = ${multiplicador}`)  
    }
}

multiplicador()

// Ejercicio 3
// Escribe una función que imprima todos los números naturales de 1 hasta x.
function NumNaturales(numUser){
    for(var i = 1; i <= numUser; i++){
        console.log(`Ejercicio 3: ${i} es un numero natural, menor o igual a ${numUser}`);
    }
}
var numUser = prompt("Ingresa un numero: ");
NumNaturales(numUser);

// Ejercicio 4
//  Escribe una función que imprima todos los números naturales en reversa, desde n hasta 1. 

function NumNaturalesRev(numUser2){
    for(var i = numUser; i >= 1; i--){
        console.log(`Ejercicio 4: ${i} es un numero natural, menor o igual a ${numUser}`);
    }
}
var numUser2 = prompt("Ingresa un numero: ");
NumNaturalesRev(numUser2);

// Ejercicio 5
// Escriba una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante.

