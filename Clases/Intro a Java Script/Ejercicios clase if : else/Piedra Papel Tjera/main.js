// Paso 1: Genero un nuero al azar.
// Math.random() genera un numero decimal aleatorio: ej: 0.433
// Al multiplicarlo por un numero entero, pues gana un entero
// Math.floor() es una funciom que rodea hacia abajo, quitando asi los decimales
// Un equivalente es Math.ceil() que redondea hacia arriba
var iaSelectorGenerator = Math.floor(Math.random() * 3);

// Paso dos: Asignar un valor correspondiente
var iaSelector;
if (iaSelectorGenerator == 0) {
    iaSelector= "piedra";
} else if (iaSelectorGenerator == 1) {
    iaSelector = "papel";
} else {
    iaSelector = "tijera";
}
    console.log(iaSelector);


    //Paso 3: Solicito informacion al usuario
    var userSelection = prompt("piedra, papel o tijera?").toLowerCase();
    console.log("Seleccion del usuario:",userSelection);

    //Paso 4: Realizo la logica del juego con comparaciones

    // En caso de Empate
/*
    if (userSelection == "piedra" && iaSelector == "piedra") {
        document.write("Empate: Ambos son piedra");
    } else if (userSelection == "papel" && iaSelector == "papel") {
        document.write("Empate: Ambos son papel");
    } else if (userSelection == "tijera" && iaSelector == "tijera") {
        document.write("Empate: Ambos son tijera");
    }
*/

    // En caso de Empate, version simplificada
    if (userSelection == iaSelector) {
        document.write("Empate, ambos son " + userSelection);
    }

    // Caso que usuario escoja piedra
    else if (userSelection == "piedra" && iaSelector == "papel") {
        document.write ("Perdiste, elegiste: " + userSelection + " y te usaron:" + iaSelector)
    } else if (userSelection == "piedra" && iaSelector == "tijera") {
        document.write ("Ganaste, elegiste: " + userSelection + " y te usaron:" + iaSelector)
    }

    // Caso que usuario escoja tijera
    else if (userSelection == "tijera" && iaSelector == "piedra") {
        document.write ("Perdiste, elegiste: " + userSelection + " y te usaron:" + iaSelector)
    } else if (userSelection == "tijera" && iaSelector == "papel") {
        document.write ("Ganaste, elegiste: " + userSelection + " y te usaron: " + iaSelector)
    }

    // Caso que usuario escoja papel
    else if (userSelection == "papel" && iaSelector == "tijera") {
        document.write ("Perdiste, elegiste: " + userSelection + " y te usaron: " + iaSelector)
    } else if (userSelection == "papel" && iaSelector == "piedra") {
        document.write ("Ganaste, elegiste: " + userSelection + " y te usaron: " + iaSelector)
    } else {
        document.write ("Error ingresa un valor valido")
    }