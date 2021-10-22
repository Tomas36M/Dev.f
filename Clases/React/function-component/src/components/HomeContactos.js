import React, {useState, useEffect} from 'react'
import ListaContactos from './ListaContactos';

function HomeContactos(){

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        //Aqui se deve realizar la llamada a APIS
        setTimeout(() => {
            setContactos([
                {id:1, nombre:"Tomas", apellido:"Munevar"},
                {id:2, nombre:"Isabela", apellido:"Escalante"}
            ])
        }, 3000);
    },[])

    return(
        <>
            {contactos.length === 0 
            ? <h2>Cragando Contactos</h2>
            : <ListaContactos lista={contactos}/>}
        </>
    )
}

export default HomeContactos;