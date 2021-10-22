var userNumber1 = parseInt(prompt("Ingresa tu primer valor"));
var userNumber2 = parseInt(prompt("Ingresa tu segundo valor"));
var userNumber3 = parseInt(prompt("Ingresa tu tercer valor"));

if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
    document.write(userNumber1 + " es mas grande que " + userNumber2 + " y que " + userNumber3);
} else if (userNumber2 > userNumber3) {
    document.write(userNumber2 + " es mas grande que " + userNumber1 + " y que " + userNumber3);
} else if (userNumber1 == userNumber2 && userNumber1 == userNumber3) {
    document.write(userNumber1 + " es igual que " + userNumber2 + " y que " + userNumber3);
} else if (userNumber2 == userNumber3) {
    document.write(userNumber2 + " es igual que " + userNumber1 + " y que " + userNumber3);
} else {
    document.write(userNumber3 + " es mas grande que " + userNumber1 + " y que " + userNumber2);
}