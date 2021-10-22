// Ejercicio 1

function ejercicio1(vector){
    for(var i=0; i<vector.length; i++){//Recorremos todo el arreglo
        for(var j=0; j<vector.length; j++){ // Comparamos elemento por elemento moviendonos en la posición.

            //* Comprobar si el valor actual es mayor que el siguiente
            if(vector[j] < vector[j+1]){
            var currentNumber = vector[j];

            //* Ahora la posición actual va a obtener el valor de la siguiente posición.         
            vector[j] = vector[j+1];

            //* Y la siguiente posición obtiene el valor de la posición actual.
            vector[j+1] = currentNumber;
            }
        }
    }
    return vector;
}

// Ejercicio 2

// Ejercicio 3

// Ejercico 4

function ejercicio4(vector){
    for (let i = 0; index < vector.length; index++) {
        for (let j = 0; index < vector.length; index++) {
            if(vector[j] > vector[j+1]){
                var currentNumber = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = currentNumber;
            }
            
        }
        
    }
    return vector;
}

