import { useState, useEffect } from 'react';
import CreateCards from './components/cards';
import './App.css';

function App() {

  const [apiData, setApiData] = useState({});
  const [inputState, setInputState] = useState('');
  const [state, setState] = useState('');

  const apiUri = `https://swapi.dev/api/starships/${state}`;

  useEffect(() => {
    fetch(apiUri)
      .then((res) => res.json())
      .then((data) => setApiData(data))
  }, [apiUri]);

  console.log(apiData)

  // Obtengo la data de cada tecladazo del input y actualizo el estado
  const inputHandler = (event) => {
    setInputState(event.target.value)

    //Copio lo que tengo en inputState y lo coloco en setState
    //Esto ejecuta nuevamente mi useEffect
  }
  const submitHandler = () => {
    setState(inputState)
  }

  return (
    <div className="div">
      <header className="App-header">
        <h1>Star Wars - Star Ships</h1>
      </header>
      {apiData.results.map((element) => {
        return <CreateCards shipData={element} />
      })}
    </div>
  )
}

export default App;
