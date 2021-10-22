function ejercicio1(){
var num1 = parseInt(prompt("Introduce un numero"));
var num2 = parseInt(prompt("Introduce un numero"));
var num3 = parseInt(prompt("Introduce un numero"));

if(num1>num2 && num1>num3){
    alert("Num1 es mayor");
} else if(num2>num3){
    alert("Num2 es mayor");
} else if(num3>num2){
    alert("Num3 es mayor")
} else {
    alert("Error")
}

}

function ejercicio2(){
    for (let index = 0; index <= 200; index+=2) {
        console.log(index);
    }
}

function ejercicio3(){
    var valorProducto = parseInt(prompt("Introduce un precio"));
    var descuento = 0.85
    valorProducto = valorProducto * descuento;
    return valorProducto;
}

function largest(array){
    var biggest = array[0];
    for(let i = 0; i<array.length;i++)
    if(array[i]>biggest){
        biggest = array[i];
    }
    return `The number ${biggest} its the biggest`;
}


function isChristmas(date){
    var christmasDate = "24-12-2021";
    if(date === christmasDate){
        return true;
    } else {
        return false;
    }
}

function isMinior(a, b, c){
    if (a < 10 || b<10 || c<10){
        return true;
    } else {
        return false;
    }
}

class Christmas{
    constructor(){
        this.date = "24-12-2021";
    }
    isChristmas(){
        if(this.date === "24-12-2021"){
            return true
        } else {
            return false
        }
    }
}
    var christmas = new Christmas();

class Queue{
    constructor(){
        this.cola1=["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
        this.cola2=[];
    }

    pushImpares(){ 
        for (let index = 1; index < this.cola1.length; index+=2) {
            this.cola2.push(index);
        }
    }
}

var queue = new Queue();
queue.pushImpares();


var arregloColores = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];

function pushNum(){
    var cola = [];
    var cola2 = [];
    for (let index = 0; index < arregloColores.length; index+=2) {
        const element = arregloColores[index];
        cola.push(element);
    }
    for (let index = 1; index < arregloColores.length; index+=2) {
        const element2 = arregloColores[index];
        cola2.push(element2)
    }
    console.log(cola);
    console.log(cola2);
}


/*function pushOdd(){
    var cola = [];
    for (let index = 1; index < arregloColores.length; index+=2) {
        const element = arregloColores[index];
        cola.push(element);
    }
    console.log(cola);
}
*/




