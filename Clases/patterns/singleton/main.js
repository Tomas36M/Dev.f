// Singleton, este patron nos permite siempre obtener una unica instancia de una clase
// Por ende cada nueva intancia de la clase devolvera la primera instancia creada principalmente

class Unica {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        // this.creada = true; //para saber si una instancia ya fue creada
        console.log(Unica.instancia);
        if(Unica.instancia){
            console.log("Creada");
            return Unica.instancia
        }

        Unica.instancia = this;

    }
}

//Vamos a crear las instancias de la clase

const a = new Unica('pedro', 18);
const b = new Unica('pancho', 17);
const c = new Unica('peter', 16);
