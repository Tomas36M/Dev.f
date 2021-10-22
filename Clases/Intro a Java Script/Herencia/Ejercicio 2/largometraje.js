// Superclase o Clase Padre
class Largometraje {
    constructor (duracion, titulo) {
    this.duracion = duracion;
    this.titulo = titulo;
    }

// Metodos Get

    getTitle() {
        return this.titulo;
    }

    getDuration() {
        return this.duracion;
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Largometraje}