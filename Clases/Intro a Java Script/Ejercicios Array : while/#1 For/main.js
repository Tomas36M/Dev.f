var contador = 0 
for (var i = 1; i < 100; i++) { 
    if(i % 2 == 1) {
        contador = contador + 1;
        document.write(`${i} es impar, `);
    }
}

document.write(` De 0 a 100 exisisten ${contador} impares `);

// (i % 2 != 0) otra opcion para el if.

