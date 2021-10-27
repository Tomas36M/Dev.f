import React from "react";
import User from "./User";
// import WithCurrentUser from "./WithCurrentUser";
import WithCurrentUser from "./withCurrentUser";
import './App.css'

//? AQUÍ ESTAMOS CREANDO NUESTRO HIGHER ORDER COMPONENT (HOC)
// const CurrentUser = WithCurrentUser (User);
const SpecificUser = WithCurrentUser (User); 

function App() {
  return (
    <>
      {/* <CurrentUser /> */}
    <SpecificUser userId={1} />
    <SpecificUser userId={2} />
    <SpecificUser userId={3} />
    <SpecificUser userId={9} />

    </>
  );
}

export default App;
