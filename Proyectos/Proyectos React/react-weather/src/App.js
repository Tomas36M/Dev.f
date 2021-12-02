import { useState, useEffect } from 'react';
import WeatherWidget from './components';
import './App.css';

function App() {

  // 2: Manejo de los states en la aplicacion
  const [apiData, setApiData] = useState({}); // Guardar la respuesta de la Api
  const [inputState, setInputState] = useState('New York');// Guardar ell input
  const [state, setState] = useState('New York');// Copia delgetState para el onClick

  //1: añado informacion de manejo de la API
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  console.log(apiKey);
  const apiUri = `https://api.openweathermap.org/data/2.5/weather?q=${state}&lang=es&units=metric&appid=${apiKey}`;

  //3: Side Effect: useEffect
  //Mandar a llamar la API y actualizar el estado solo cuando apiURL cambie
  useEffect(() => {
    fetch(apiUri)
      .then((res) => res.json())
      .then((data) => setApiData(data))
  }, [apiUri]);

  //Obtengo la data de cada tecladazo del input y actualizo el estado
  const inputHandler = (event) => {
    setInputState(event.target.value)

    //Copio lo que tengo en inputState y lo coloco en setState
    //Esto ejecuta nuevamente mi useEffect
  }
  const submitHandler = () => {
    setState(inputState)
  }

  return (
    <div>
      <div className="serach-location">
        <label for="location-name">
          Enter Location:
        </label>
        <input
          type="text"
          id="location-name"
          className=""
          onChange={inputHandler}
          value={inputState}
        />
        <button onClick={submitHandler}>
          Search
        </button>
      </div>
      {apiData.main ? (<WeatherWidget weatherData={apiData} />) : (<h2>Cargando...</h2>)}
    </div>
  )
}

{/* <label for="location-name">
            Enter Location: 
          </label>
          <input
            type="text"
            id="location-name"
            className=""
            onChange={inputHandler}
            value={inputState}
          />
          <button onClick={submitHandler}>
            Search
          </button> */}

{/* { apiData.main ? (<WeatherWidget weatherData={apiData} />) : (<h2>Cargando...</h2>)} */ }

export default App;
