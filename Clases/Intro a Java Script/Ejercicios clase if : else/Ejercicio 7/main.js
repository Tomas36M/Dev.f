var userDaySelection = prompt("Que dia de la semana es hoy?").toLowerCase();

if (userDaySelection == "lunes"||userDaySelection == "martes"||userDaySelection == "miercoles"||userDaySelection == "jueves") {
    document.write("Hoy dia tienes clase de Java Script a las 6:30pm");
} else if (userDaySelection == "viernes") {
    document.write("Hoy empieza el fin de semana, a por unas cervezas!!")
} else if (userDaySelection == "sabado") {
    document.write("Hoy es sabado, a por mas cervezas!!")
} else if (userDaySelection == "domingo") {
    document.write("Hoy es domingo, hoy es dia de pereza")
} else {
    document.write("Introduce un valor valido");
}