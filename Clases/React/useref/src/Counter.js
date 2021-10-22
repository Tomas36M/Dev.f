//*Importar useState, useeffect
//*Importar -> trabajar el estado
//*useEffect -> Si tenemos algo de codigo que queremos mostrar usamos useEffect

import React, {useState, useEffect, useRef} from 'react'

//*Nota: useState y useRef son similares y ambos nos permitrn modificar los estados
//*useRef no renderiza la lista nuevamenete

function Counter() {

    const [count, setCount] = useState(0) // Si modifico el estado,, el componente se vuve a pintar
    const name = useRef('Sasha') // el 0 va a indicar cuantas veces se ha renderizado
    const cuentaRend = useRef(0);
    const botonConRef = useRef();

    useEffect(() => {
        
        if(cuentaRend.current === 0){
            cuentaRend.current += 1
            return; 
        }
        console.log(`El valor inicial de Count es: ${count}`)
    }, [count])  //!Los corchetes significan dependencias
                //!Los corchetes sirven para escuchar los cambios en el estado o en los props

    const changeName = () => {
        name.current = 'Matias'
        console.log(`Tu nuevo nombre es ${name.current}`)
    }




    return (
        <div>
            <h1>Count: {count}</h1>
            <button ref={botonConRef} onClick={() => setCount(count + 1)}>Sumar 1</button>

            <h1>Name: {name.current}</h1>
            <button onClick={() => {changeName()}}>Cambiar Nombre</button>
        </div>
    )
}

export default Counter
