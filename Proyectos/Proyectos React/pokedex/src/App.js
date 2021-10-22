import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CreateCards from './components/PokeCard';
import './App.css';

function App() {

const [apiData, setApiData] = useState({});
const [inputState, setinputState] = useState('151');
const [state, setState] = useState('151');

const apiUri = `https://pokeapi.co/api/v2/pokemon?limit=${state}&offset=0'`;

useEffect(() => {
  fetch(apiUri)
    .then((res) => res.json())
    .then((data) => setApiData(data))
}, [apiUri]);

console.log(apiData)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
