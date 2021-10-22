/* Para que yo me pueda vacunar, necesito cumplir necesito cumplir alguno de los siguientes requisitos;
1- Mayores de 18 que reciden en el municipio
*/

// Paso #1: Definir las variables que necesitamos;
var edad = parseInt(prompt("Que edad tienes?"));
var trabajadorPublico = prompt ("Trabajas en el sector publico o eres habitante de calle - si o no?").toLowerCase()
var embarazada = prompt("Estas embarazada? si o no").toLowerCase();
var semanasGestacion = parseInt(prompt("En caso de estar embrazada, cuantas semanas tienes?"))

// Paso #2: Validar la primera condicion
if(edad >= 18 && trabajadorPublico == "si"){
    document.write("Si te puedes vacunar, por ser mayor de 18 y ser un trabajador publico o habitante de calle")
} else if (edad >= 18 && embarazada == "si" && semanasGestacion >=9) {
    document.write("Si te puedes vacunar, por estar embarazada y con 9 o mas semanas de gestacion")
} else if (edad >= 45) {
    document.write("Si te puedes vacunar por tener 45 años o mas")
} else {
    document.write("Lo sentimos, aun no te puedes vacunar, espera proximos avisos")
}