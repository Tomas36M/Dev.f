import React from 'react';
import SearchBar from './component/SearchBar';
import ImageCard from './component/ImageCard';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state = {
    results: []
  }

  sendSearch = (search) => {
    const apiKey = 'UvsUDwn9ib7G9zQheFYnpDEABPYAK5NT';
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en`)
    .then((response) => {
      console.log(response.data.data);
      this.setState({results: response.data.data}) // Debe tener el objeto
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentWillMount(){ //Metodo UnSafe. Actualmente ya no se usa
    console.log(`1. Antes de que se ejecute el Render`)
  }

  componentDidMount(){
    console.log(`3. Despues del render`)
  }

  render(){
    console.log(`2. Se ejecuta al realizar el render`)
    return(
      <div className="App">
        <SearchBar emitSearch = {this.sendSearch} />
        <div className="grid-cards">
          {
            this.state.results.map (gif => (<ImageCard url={gif.images.fixed_height_downsampled.url} />))
          }
        </div>
      </div>
    )
  }



}


export default App;
