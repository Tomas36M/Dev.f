// URL: https://pokeapi.co/api/v2/ability/{id or name}/

const pokemonContainer = document.querySelector('.pokemon-container');
const pokemonSearchBox = document.querySelector('#myInput');

const typeColor = {
	grass: "#d2f2c2",
	poison: "#f7cdf7",
	fire: "#ffd1b5",
	flying: "#eae3ff",
	water: "#c2f3ff",
	bug: "#e0e8a2",
	normal: "#e6e6c3",
	electric: "#fff1ba",
	ground: "#e0ccb1",
	fighting: "#fcada9",
	psychic: "#ffc9da",
	rock: "#f0e09c",
	fairy: "#ffdee5",
	steel: "#e6eaf0",
	ice: "#e8feff",
	ghost: "#dbbaff",
	dragon: "#c4bdff"
};

const typeColor2 = {
	grass: "#7AC74C",
	poison: "#A33EA1",
	fire: "#EE8130",
	flying: "#A98FF3",
	water: "#6390F0",
	bug: "#A6B91A",
	normal: "#A8A77A",
	electric: "#F7D02C",
	ground: "#E2BF65",
	fighting: "#C22E28",
	psychic: "#F95587",
	rock: "#B6A136",
	fairy: "#D685AD",
	steel: "#B7B7CE",
	ice: "#96D9D6",
	ghost: "#735797",
	dragon: "#6F35FC"
};

// convertir typeColor a un arreglo
const mainTypes = Object.keys(typeColor);
const mainTypes2 = Object.keys(typeColor2);

// Bucar Informacion en la pokeApi del pokemon por id utilizando fetch
const fetchPokemonByID = async (id) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        createPokemonContainer(data)
    });
}

// De cuantos pokemons necesitas informacion
const fetchPokemons = async (number) => {
    for (let index = 1; index <= number; index++) {
        await fetchPokemonByID(index);
    }
}

// Crear contenedores para los pokemons
const createPokemonContainer = (pokeData) => {

    const pokeType = pokeData.types.map((objeto)=>objeto.type.name);

    const colorType = mainTypes.find(type => pokeType.indexOf(type) > -1);
    const colorType2 = mainTypes2.find(type => pokeType.indexOf(type) > -1);

    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

    const dataContainer = document.createElement('div');
    dataContainer.classList.add('pokemon-block');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    //const backImgContainer = document.createElement('div');
    //backImgContainer.classList.add('img-container');

    const id = pokeData.id.toString().padStart(3, 0);

    const number = document.createElement('p');
    number.classList.add('num-pokemon');
    number.textContent = `#${pokeData.id.toString().padStart(3, 0)}`;

    const img = document.createElement('img');
    img.src = pokeData.sprites.other.dream_world.front_default;
    //img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    //img.src = pokeData.sprites.front_default;
    //img.src = pokeData.sprites.other["oficial-artwork"].front_default;

    //const backImg = document.createElement('img');
    //img.src = pokeData.sprites.back_default;

    imgContainer.appendChild(img);
    //backImgContainer.appendChild(backImg);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokeData.name;

    // const pokemonTypeContainer = document.createElement('div');
    // pokemonTypeContainer.classList.add('type-container');

    const typeText = document.createElement('p');
    typeText.classList.add('type-text')
    typeText.textContent = 'Type: ' + pokeType;
    
    // pokemonTypeContainer.appendChild(typeText);

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    dataContainer.appendChild(number);
    dataContainer.appendChild(imgContainer);
    dataContainer.appendChild(name);
    // dataContainer.appendChild(pokemonTypeContainer);

    cardBack.appendChild(statBars(pokeData.stats));

    cardContainer.appendChild(dataContainer);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
    

    // Si hay mas de un tipo mostrar dos colores de fondo de pantalla
    if (pokeType[1]) {
        pokeType.forEach(type => {
            const typeTextElement = document.createElement("div");
            typeTextElement.classList.add('type-containers')
            typeTextElement.style.backgroundColor = typeColor2[type];
            typeTextElement.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            dataContainer.appendChild(typeTextElement);
        });
        dataContainer.style.background =
        "linear-gradient(150deg,"  +
        typeColor[pokeType[0]] +
        " 50%," +
        typeColor[pokeType[1]] +
        " 50%)";
        cardBack.style.background =
        "linear-gradient(150deg,"  +
        typeColor[pokeType[0]] +
        " 50%," +
        typeColor[pokeType[1]] +
        " 50%)";
    } else {
        dataContainer.style.backgroundColor = typeColor[colorType];
        cardBack.style.backgroundColor = typeColor[colorType];
        const pokemonTypeContainer = document.createElement('div');
        pokemonTypeContainer.classList.add('type-container');
        pokemonTypeContainer.style.backgroundColor = typeColor2[colorType];
        pokemonTypeContainer.textContent = pokeType[0].charAt(0).toUpperCase() + pokeType[0].slice(1);
        dataContainer.appendChild(pokemonTypeContainer);
    }

    //cardBack.appendChild(number);
    //cardBack.appendChild(backImgContainer);
    //cardBack.appendChild(name);
    //cardBack.appendChild(pokemonTypeContainer);
}

/*const renderPokemonTypes = types => {
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColor[colorType];
        typeTextElement.textContent = pokeType;

    });
}*/



const statBars = (stats) => {
    const statsContainer = document.createElement('div');
    statsContainer.classList.add('stats-container');

    stats.forEach(element => {

        const statContainer = document.createElement('div');
        statContainer.classList.add('stat-container');

        const statName = document.createElement('p');
        statName.classList.add('stat-name')
        statName.textContent = element.stat.name.toUpperCase() + ':';

        const progress = document.createElement('div');
        progress.classList.add('progress');

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        progressBar.classList.add('bg-info');
        progressBar.classList.add('progress-bar-striped');
        progressBar.setAttribute("role", "progressbar");
        progressBar.setAttribute("aria-valuenow", element.base_stat);
        progressBar.setAttribute("aria-valuemin", 0);
        progressBar.setAttribute("aria-valuemax", 200);
        progressBar.style.width = element.base_stat + '%';
        

        progressBar.textContent = element.base_stat;

        progress.appendChild(progressBar);
        statContainer.appendChild(statName);
        statContainer.appendChild(progress);

        statsContainer.appendChild(statContainer);
    });
    return statsContainer;
}

// function myFunction() {
//     var filter = pokemonSearchBox.value.toUpperCase();
//     for (i = 0; i < fetchPokemonByID(); i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }



fetchPokemons(400);

