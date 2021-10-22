import React from 'react'

function ListaContactos({lista}){ 
    // Logica
    const renderContactos = () => {
        return(lista.map(
            (contacto) => <p key={contacto.id}>{contacto.nombre} {contacto.apellido}</p>
            )
        )
    }

    //Vista / Output
    return(
        <>
            <h1>Esta es mi lista de contactos</h1>
            {renderContactos()}
        </>
    )
}

export default ListaContactos;