import React from 'react'
import { UseCarContext } from '../context/CarContext';

const Cart = () => {


    const context = UseCarContext();
    console.log(context.state)


    return (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    )
}

export default Cart
