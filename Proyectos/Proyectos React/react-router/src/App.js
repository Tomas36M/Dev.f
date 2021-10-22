import { Route, Switch, Link, useLocation, useParams, useHistory } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portafolio/:pid">
            <PortafolioDetalle />
          </Route>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>

        </Switch>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  )
}

function Portafolio() {
  return (
    <>
      <h1>Portafolio</h1>
      <ul>
        <li><Link to="/portafolio/0">Pinterest</Link></li>
        <li><Link to="/portafolio/1">Cajero</Link></li>
        <li><Link to="/portafolio/2">Pokedex</Link></li>
      </ul>
    </>
  )
}

function Contacto() {
  return (
    <>
      <h1>Contacto</h1>
    </>
  )
}

function Error404() {
  let location = useLocation();
  return (
    <>
      <h1>Error 404</h1>
      <p>No encontre la ruta: {location.pathname}</p>
    </>
  )
}

function PortafolioDetalle() {
  const proyectos = [
    { id: 0, nombre: "Pinterest", desc: "Un clon de pinterest con html y css" },
    { id: 1, nombre: "Cajero", desc: "Simulacion de cajero automatico con HTML, CSS y JS" },
    { id: 2, nombre: "Pokedex", desc: "Una pokedex utilizando poke api" }
  ]

  let { pid } = useParams();
  let history = useHistory();

  return (
    <>
      <h3>ID: {proyectos[pid].id}</h3>
      <h3>NOMBRE: {proyectos[pid].nombre}</h3>
      <h3>Description: {proyectos[pid].desc}</h3>

      <button onClick={() => {
        /*<Link to="/portafolio">Portafolio</Link> <- Esto no funciona
        Cuando quiero usar un enlace dentro de una lógica de JS
        Necesito usar useHistory
         */
        history.push('/portafolio');
        //history.goback(); me regresa a la URL anterior de donde vine.
      }}>
        Nos vamos al portafolio
      </button>
    </>
  )
}

export default App;
