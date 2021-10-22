import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sensei from './component/sensei';


//Tambien podemos utilizar una clase de ES6 para definir un componente
class App extends React.Component{

    constructor(){
  
    super()

    this.state={
    name: "Tomas Munevar",
    email: "tomas@gmail.com",
    ocupation: "Estudiante de Dev.f",
    }
  }
  render()
  {
    return(
      <div className="App">
        {/* Props que proviene de propiedades, devuelve un elemento de react*/}
        <h1>Props en React!</h1>
        <Sensei name={this.state.name} email={this.state.email} ocupation={this.state.ocupation} />
        <button onClick={()=> this.setState({name:"Cesar", email:"Cesar@gmail.com", ocupation:"Profesor Dev.f"})}>Actualizar</button>
      </div>
    )
  }
}

export default App;
