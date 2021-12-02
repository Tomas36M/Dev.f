import React from 'react';
import CreateCards from './components/PokeCard';
import './App.css';
import { PokemonProvider } from './context/pokeContext';

function App() {

  return (
    <div className="App">
      <PokemonProvider>
          <CreateCards />
      </PokemonProvider>
    </div>
  );
}

export default App;
