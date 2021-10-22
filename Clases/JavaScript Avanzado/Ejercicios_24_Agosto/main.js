// Ejercicio 1
//Crear una función que dado un año determine si es un año bisiesto o no. Ej---> isLeap(2016) Resultado ----> true
/*
const esBisiesto = (year) => {
    if (year % 4 === 0) {
        return `El año ${year} es bisiesto`
    } else{
        return`El año ${year} no es bisiesto`
    }
}
*/
const esBisiesto = (year) => {
    return (year % 4 === 0) ? `El año ${year} es bisiesto` : `El año ${year} no es bisiesto`
}

console.log(esBisiesto(2012));

// Ejercico 2