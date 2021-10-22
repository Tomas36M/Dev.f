var userNumber = parseInt(prompt("Escoge un numero ente 1 y 1000"));

if (userNumber == 734) {
    document.write("Te ganaste un Elefante");
} else if (userNumber > 1000) {
    document.write("Tu numero es mayor que 1000, no es valido")
} else if (userNumber > 734 || userNumber < 734) {
    document.write("No te ganaste el Gran Premio, sigue participando")
} else {
    document.write("Por favor introduce un valor numerico valido")
}