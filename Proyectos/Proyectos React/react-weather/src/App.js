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
    <div className="App">
      <header className="App-header">
        <p>Weather</p>
      </header>  
        <div className="container">
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

          <section className="data">
            { apiData.main ? (
              <main>
                <img 
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="Weather Status Icon"
                  className="weather-icon"
                />
                <p>Temperatura actual: <strong>{apiData.main.temp}</strong></p>
                <p>Ubicacion: <strong>{apiData.name}</strong></p>
                <p>Temp max: <strong>{apiData.main.temp_max}</strong></p>
                <p>Temp min: <strong>{apiData.main.temp_min}</strong></p>
                <p>Condiciones: <strong>{apiData.weather[0].description}</strong></p>
                <p>Humedad: <strong>{apiData.main.humidity}</strong></p>
                <p>Viento: <strong>{apiData.wind.speed}</strong></p>
              </main>
            ) : (
              <h3>Cargando...</h3>
            )}
          </section>
        </div> 
        { apiData.main ? (<WeatherWidget weatherData={apiData} />) : (<h2>Cargando...</h2>)}
    </div>
  );
}

export default App;
