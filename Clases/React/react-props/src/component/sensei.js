import React from 'react';

export default class Sensei extends React.Component{

    render()
    {
        console.log(this.props)

        //Props: es una palabara clave especial que utiliza react para las propiedades

        return(
            // JSX: Son la convinacion de nuestro HTML y de nuestro JS
            <div style={{backgroundColor: 'lightblue', margin:15}}>
                    <h1> Hola {this.props.name} </h1>
                    <h2> {this.props.email} </h2>
                    <h3> {this.props.ocupation} </h3>
            </div>

        )


    }

}

