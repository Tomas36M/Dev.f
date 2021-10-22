var userNumber = prompt("Porfavor introduce un numero");
var cont = 1;
var multiplos = [];


while (cont <= userNumber) {
    if(cont % 5 == 0) {
        multiplos.push(cont);
    }
    cont = cont + 1;
}

var pokes = [];

for (var index = 0; index < multiplos.length; index++) {
    pokes.push(pokemons[multiplos[index]]);

    var numPokemon = index+1;
    if (numPokemon.toString().length == 1) {
        //CASO #1 Es de un Digito: Añadir dos ceros
        numPokemon = '00' + numPokemon;
    } else if (numPokemon.toString().length == 2) {
        //CASO #2 Es de dos Digitos: Añadir un cero
        numPokemon = '0' + numPokemon;
    }

    var img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numPokemon}.png`;
}

document.write(pokes);