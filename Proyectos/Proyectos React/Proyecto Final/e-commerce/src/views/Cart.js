import React from 'react'
import { UseProductContext } from '../context/ProductContext';

const Cart = () => {


    const context = UseProductContext();
    console.log(context.state)


    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart
