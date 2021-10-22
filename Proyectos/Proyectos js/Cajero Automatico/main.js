var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' },
    { nombre: "Isabela", saldo: 67, password: 'vacamaisju'},
    
];

var currentUser = -1;

function logIn(){
    var saludoUser = document.getElementById("saludo")
    var displayCont = document.getElementById("mostrar");
    var userName = document.getElementById("user").value;
    var userPassword = document.getElementById("password").value;


    for (let index = 0; index < cuentas.length; index++) {
        console.log("ejecute for")
        if (cuentas[index].password===userPassword && cuentas[index].nombre===userName){
            console.log("ejecute if");
            displayCont.style.display ="block";
            saludoUser.innerHTML = `Hola ${cuentas[index].nombre}, tu saldo actual es ${cuentas[index].saldo}`;
            currentUser = index;
        } 
    }
    if (currentUser.password!=userPassword || currentUser.nombre!=userName) {
        alert("Error");
    }
}

var displayCont2 = document.getElementById("mostrar2");

function sumar(){
    let cantidad = parseInt(document.getElementById('transf').value);
    let resultado = cantidad + cuentas[currentUser].saldo;
    if(cuentas[currentUser].saldo <= 1000){
        cuentas[currentUser].saldo = resultado;
        displayCont2.style.display ="block";
        document.getElementById("proceso").innerHTML = "Proceso Exitoso"
        document.getElementById('resultado').innerHTML = `Tu nuevo saldo es ${resultado}`;
    } else if(cuentas[currentUser].saldo > 1000){
        displayCont2.style.display ="block";
        document.getElementById("proceso").innerHTML = "Proceso no exitoso";
        document.getElementById('resultado').innerHTML = `Tu cuenta no puede revasar los 1000$`;
    }
}


function restar(){
    let cantidad = parseInt(document.getElementById('retiros').value);
    let resultado = cuentas[currentUser].saldo - cantidad;
    cuentas[currentUser].saldo = resultado;
    displayCont2.style.display ="block";
    document.getElementById('resultado').innerHTML = `Tu nuevo saldo es ${resultado}`
}

/*class bankAcount{
    constructor(cuentas, currentUser){
        this.cuentas = cuentas;
        this.currentUser = currentUser;
}

// Metodos
getSaldo(){
return this.cuentas[this.currentUser].saldo
}  

setSaldo(cantidad) {
    this.cuentas[this.currentUser].saldo += cantidad;
}

retirar(cantidad){
    this.cuentas[index].saldo -= cantidad;
}
}
*/



