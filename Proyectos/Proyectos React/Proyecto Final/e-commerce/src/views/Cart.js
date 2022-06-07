import React from 'react'
import { UseProductContext } from '../context/ProductContext';
import Navbar from '../component/Navbar/Navbar'

const Cart = () => {


    const context = UseProductContext();
    console.log(context.state)


    return (
        <div>
            <Navbar />
            <h1>Cart</h1>
        </div>
    )
}

export default Cart
