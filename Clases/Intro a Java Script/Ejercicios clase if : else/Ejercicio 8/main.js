var userCalification = parseInt(prompt("Introduce tu calificacion, no olvides que 10 es la calficacion maxima"));

if (userCalification == 10) {
    document.write("Exelente ya puedes hakear a la nasa");
} else if (userCalification > 10) {
    document.write("Ingresa un numero del 1 al 10, no hay otros valores validos");
} else if (userCalification == 9) {
    document.write("Exelente ya puedes hakear el facebook de tu novia");
} else if (userCalification >= 6 && userCalification <= 8) {
    document.write("No esta mal, pero puedes mejorar");
} else if (userCalification < 6) {
    document.write("Reprobado, sigue practicando")
}  else {
    document.write("Tu valor no tiene sentido")
}