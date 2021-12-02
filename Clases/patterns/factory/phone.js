// Factory lo que hace es que ayuda a crear un objeto de mejor forma.
// Cuando creamos muchos objetos especificamente para una clase

class Phone {
    constructor(
        serialNum,
        model = "Generico",
        procesador = "Generico",
        Ram = "4 GB",
        width = 67.3,
        height = 138,
        resolution = "750 * 1334"
    ){
        this.serialNum = serialNum;
        this.config = {
            model,
            procesador,
            Ram,
            width,
            height,
            resolution,

        }
    }

    dial(num){
        console.log('Now dialing ' + num);
    }

    displayConfig(){
        console.log(this.config);
    }

}

module.exports = Phone;