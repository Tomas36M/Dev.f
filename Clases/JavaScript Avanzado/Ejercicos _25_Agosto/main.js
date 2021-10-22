// Ejercicio 1
// Escriba una función de JavaScript que devuelva una cadena pasada con letras en orden alfabético. Ej orderWord("webmaster") resultado ---> "abeemrstw"
const orderString = (string) => {
    return string.split('').sort().join('');
}

console.log(orderString('isabella'));

// Ejercicio 2
// 

const values = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const removeFalsy = values.filter(Boolean);
console.log(removeFalsy)