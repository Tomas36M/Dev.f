const request = require('request');
// const uri = `https://pokeapi.co/api/v2/pokemon/`;

function getPokemonByName (name){
    request(`https://pokeapi.co/api/v2/pokemon/${name}/`, function (error, response, body) {
        if (response.statusCode === 200) {
            const bodyJson = JSON.parse(body);
            const typePokemon = bodyJson.types.map((objeto)=>objeto.type.name);
            console.log(`El tipo de ${name} es: ${typePokemon}`);
        } else {
            console.log(`Ocurrio un error: ${response.statusCode} ${response.statusMessage}`);
        }    
    });
}

getPokemonByName(`charizard`)
