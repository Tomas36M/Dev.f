import React from 'react'
import './products.css'

const Products = ({
    name,
    description,
    price,
    category,
    brand,
    image
}) => {
    return (
        <div className="product-container">
            <img src={image} alt='product' />
            <h3>{name}</h3>
            <p>Desccription: {description}</p>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
        </div>
    )
}

export default Products
