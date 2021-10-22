import './App.css';
import React from 'react';
import Template from './component/Template';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends React.Component {

  constructor() {

    super()

    this.state={
      name: "Tomas Munevar Escalante",
      email: "tomasmunevar36@gmail.com",
      ocupation: "Front-End Developer"
    }
  }
  render()
  {
    return(
      <div className="App">
        <Template/>
        <Header name={this.state.name} email={this.state.email} ocupation={this.state.ocupation}/>
        <Footer />
      </div>
    )
  }
}

export default App;
