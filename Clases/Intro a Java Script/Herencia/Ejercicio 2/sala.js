class Sala {
    constructor(numSala, cantidadGente, funcionDia){
        this.numSala = numSala;
        this.cantidadGente = cantidadGente;
        this.funcionDia = funcionDia;
    }


// Metod Set
    setMovie () {
        return "Se está reproduciento : " + this.funcionDia.getTitle() + " Duracion " + this.funcionDia.getDuration();
    }

    //METODO (GET)
    getPeople(){
        return this.cantidadGente
    }

    getSalaNumber(){
        return this.numSala
    }


}


//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
module.exports = {Sala}