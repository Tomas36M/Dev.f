import React, { useState, useEffect, useReducer } from 'react';
import UseAxios from '../hooks/UseAxios';
import cartReducer from './Reducer'

// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información
// entre diferentes niveles de jerarquía

// Para usar CONTEXT, necesitamos seguir una serie de pasos:

// #1 Crear un contexto vacio.
const ProductContext = React.createContext();

// #2 Crear un proveedor (Provider) del Contexto (de la data)
// Es decir, maneja de donde se obtiene y como se pasa la información
function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    const hola = [{name:"pollo",last:"broaster"}];


    const { response, loading, error } = UseAxios({
        method: 'GET',
        url: 'item'
    });
    

    const handleChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (response !== null) {
            setProducts(response);
            console.log(response)
        }
    }, [response]);

    const filteredProducts = products && products.filter(product =>
        product.product_name.toLowerCase().includes(search.toLowerCase())
    );

    const value = {
        products,
        handleChange,
        filteredProducts,
        loading, 
        error,
        hola
    }

    return(
        <ProductContext.Provider value={value} {...props} />
    )
}

// #3 Consumidor del contexto (Consumer)
// Brindar el acceso a la data a los componentes.
const UseProductContext = () => {
    const context = React.useContext(ProductContext);
    return context;
}

// #4 Exportar el Provider y el Consumer
// para que estas puedan ser invocadas por nuestros componentes
export {
    ProductProvider,
    UseProductContext
}

/* USO DE CONTEXT
#5 Ahora debemos de ir a un componente de orden superior (por ejemplo Home)
y envolver a los componentes que necesitan la información con la etiqueta
del Provider. De esta forma podrá utilizarse en todos los componentes descendientes.
#6 Entrar a un componente y consumir el contexto (ejemplo: SongList, SongDetail).
En este caso haciendo uso de useSongContext
*/