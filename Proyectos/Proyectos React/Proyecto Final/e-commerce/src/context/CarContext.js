import React, { useReducer } from 'react';
import Reducer from './Reducer'
import { UseProductContext } from './ProductContext';

// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información
// entre diferentes niveles de jerarquía

// Para usar CONTEXT, necesitamos seguir una serie de pasos:

// #1 Crear un contexto vacio.
const CarContext = React.createContext();

// #2 Crear un proveedor (Provider) del Contexto (de la data)
// Es decir, maneja de donde se obtiene y como se pasa la información
function CarProvider(props) {

    const context = UseProductContext()

    const [state, dispatch] = useReducer(Reducer, {
        products: context.products,
        cart: [],
    });
    console.log(context.products);

    const value = {
        state,
        dispatch
    }

    return(
        <CarContext.Provider value={value} {...props} />
    )
}

// #3 Consumidor del contexto (Consumer)
// Brindar el acceso a la data a los componentes.
const UseCarContext = () => {
    const context = React.useContext(CarContext);
    return context;
}

// #4 Exportar el Provider y el Consumer
// para que estas puedan ser invocadas por nuestros componentes
export {
    CarProvider,
    UseCarContext
}

/* USO DE CONTEXT
#5 Ahora debemos de ir a un componente de orden superior (por ejemplo Home)
y envolver a los componentes que necesitan la información con la etiqueta
del Provider. De esta forma podrá utilizarse en todos los componentes descendientes.
#6 Entrar a un componente y consumir el contexto (ejemplo: SongList, SongDetail).
En este caso haciendo uso de useSongContext
*/