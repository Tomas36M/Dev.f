// Ejercicio 1

function findLetters(){
    var miArreglo = [8,'e',7,2,'a','d','f',2,3,1,4,3];
    var newArray = [];
    for (let index = 0; index < miArreglo.length; index++) {
        const element = miArreglo[index];
        if(typeof(element) === 'string'){
            newArray.push(element);
        }
    }
    return newArray;
}

// Ejercicio 2

function getBiggest(array){
    //var miArreglo = [1,4,7,2,4,1,9,4,0,2,4,5,12];
    var numMayor = array[0];
    for(let i = 0; i<array.length;i++)
    if(array[i]>numMayor){
        numMayor = array[i];
    }
    return `El numero ${numMayor} es el mas grande del arreglo`;
}

// Ejercicio 3

class Contacto{
    constructor(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}

class ListaContactos{
    constructor(){
    }

addContact(){
}

searchContact(){
}

}