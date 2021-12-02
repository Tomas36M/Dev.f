import React, {useState, useEffect} from "react";
import axios from "axios";

//? #1: Crear contexto

const PokemonContext = React.createContext();

//? #2: Crear un provider 

const PokemonProvider = (props) => {
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [state, setState] = useState('151')
    const [load, setLoad] = useState('true');

    const pokeArr = [];

    const apiUri = `https://pokeapi.co/api/v2/pokemon?limit=${state}&offset=0'`;

    useEffect(() => {
        axios.get(apiUri)
            .then((response) => response.data)
            .then((data) => setResult(
                data.results.map((item) => {
                    axios.get(item.url)
                        .then((response) => response.data)
                        .then((allpokemon) => pokeArr.push(allpokemon))
                        .catch((error) => console.log(error))
                    return setPoke(pokeArr);
                }),
            ))
            .catch((error) => console.log(error))
    }, []);
    setTimeout(() => {
        setLoad(false);
    }, 1000);
    

    const value = {
        result,
        poke,
        load,
        setState,
    }

    return (
        <PokemonContext.Provider value={value} {...props} />
    )


}

const UsePokemonContext = () => {
    const context = React.useContext(PokemonContext);
    return context;
}

// #4 Exportar el Provider y el Consumer
// para que estas puedan ser invocadas por nuestros componentes
export {
    PokemonProvider,
    UsePokemonContext
}





// // const [apiData, setApiData] = useState({});
// // const [state, setState] = useState('151');

// // const apiUri = `https://pokeapi.co/api/v2/pokemon?limit=${state}&offset=0'`;

// // useEffect(() => {
// //   fetch(apiUri)
// //     .then((res) => res.json())
// //     .then((data) => setApiData(data))
// // }, [apiUri]);