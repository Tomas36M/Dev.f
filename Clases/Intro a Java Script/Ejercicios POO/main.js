class enCartelera {

    //CREAR NUESTRO CONSTRUCTOR
    //SOLO PODEMOS USAR UN CONSTRUCTOR POR CLASE
    constructor (pelicula, sala, clasisficacion, boletos) {
        this.pelicula = pelicula;
        this.sala = sala;
        this.clasisficacion = clasisficacion;
        this.boletos = boletos;
    }

    //LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTRO OBJETO
    //METODOS
    //VAMOS A SIMULAR UN PEQUEÑO SISTEMA PARA SABER SI ESTÁN APROBADOS O REPROBADOS
    boletosDisponibles() {
        if(this.boletos === true){
            return "\n Aun hay cupos dispoibles! Disfruta tu pelicula.";
        }else if (this.boletos === false){
            return "\n No hay cupos disponibles lo sentimos";
        }else{
            return "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
        }
    }
}

// CREACION DE NUESTROS OBJETOS
const peliculaUno = new enCartelera("Pelicula: Pulp Fiction","Sala: 3", "No apta para menores de edad", true)
const peliculaDos = new enCartelera("Pelicula: 8 Miles","Sala: 2", "14 años o mas", false)
const peliculaTres = new enCartelera("Pelicula: Cat-Dog","Sala: 1", "Para todo Publico", true)

console.log(peliculaUno.pelicula, peliculaUno.sala, peliculaUno.clasisficacion, peliculaUno.boletosDisponibles());
console.log(peliculaDos.pelicula, peliculaDos.sala, peliculaDos.clasisficacion,  peliculaDos.boletosDisponibles());
console.log(peliculaTres.pelicula, peliculaTres.sala, peliculaTres.clasisficacion, peliculaTres.boletosDisponibles())