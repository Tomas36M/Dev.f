import React from 'react'

function HomeFunction({saludo, nombre}){
    return(
        <>
            <h1>Este es el Home en function</h1>
            <p>{saludo} {nombre}</p>
        </>
    )
}

export default HomeFunction;