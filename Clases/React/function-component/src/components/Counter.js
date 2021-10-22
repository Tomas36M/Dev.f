import React, {useState} from 'react'

function Counter(){
// Aqui va la logica
// useSate devulve un Arreglo con dos elementos [valor, funcion]
// useState recibe como parametros el estado/valor inicial

// Estoy desesstructurando el objeto
// posicion 0 --> El valor del estado (estadoContador)
// posicion 1 --> Funcion: Me permite asignar un nuevo valor a mi estado
const [estadoContador, setEstadoContador] = useState(0)


    return(
        <div className="contador">
            <p>{estadoContador}</p>
            <button onClick={()=>{
                setEstadoContador(estadoContador + 1);
            }}>Sumar</button>
            <button onClick={()=>{
                setEstadoContador(estadoContador - 1);
            }}>Restar</button>
        </div>
    )
}

export default Counter;