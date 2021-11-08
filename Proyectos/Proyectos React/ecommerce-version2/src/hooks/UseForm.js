import {useState} from 'react'


function useForm(callback , defaults) {
    
    const [input, setInput] = useState(defaults)//vamos a guardar los valores de mi formulario
    

    // useEffect (() => { //ESCUCHAR SI HAY CAMBIOS EN LOS PROPS O EN EL ESTADO
    //     setInput({...defaults})
    // }, [defaults])

    const handleSubmit = (event) =>{
        //handleSubmit va a ser ocupada en el submit de mi formulario
        event.preventDefault();  //Evita el refresh al enviar el formulario, en react debemos evitar el refresh
        callback(input) 
    }

    const handleInputChange = (event) => {
            const {name, value} = event.target
            console.log(name,value);
            setInput({...input, [name]:value})
    }


    return { //Los hooks no regresan JSX, por eso en el return no se usa (), utilizamos {}
        input,
        handleSubmit,
        handleInputChange
    } 
}

export default useForm