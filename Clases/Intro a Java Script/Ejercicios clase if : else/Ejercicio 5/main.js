var userNumber1 = parseInt(prompt("Ingresa un numero"));
var userNumber2 = parseInt(prompt("Ingresa otro numero"));

if (userNumber1 < userNumber2) {
    document.write("El numero: " + userNumber1 + " es menor que " + userNumber2)
} else if (userNumber1 == userNumber2) {
    document.write(userNumber1 + " es igual que " + userNumber2)
} else {
    document.write("El numero: " + userNumber1 + " no es menor que " + userNumber2)
}