var userNumber = parseInt(prompt("Introduce un numero"));
var i = 1;
while (i <= userNumber){
    if (i % 5 == 0) {
        document.write(i + ",")
    }
    i++
}