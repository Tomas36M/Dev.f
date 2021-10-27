import React, { useState, useEffect } from 'react'
import UseAxios from '../hooks/UseAxios'
import Products from '../component/Product/Products';
import { Grid } from '@mui/material';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

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
            console.log(response);
        }
    }, [response]);

    const filteredProducts = products && products.filter(product =>
        product.product_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className='product-search'>
                <form>
                    <input
                        className='product-search-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            {error && (
                <div>
                    <p>{error.message}</p>
                </div>
            )}

            {products && <Grid className="products" container spacing={3}>
                {filteredProducts.map(product => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Products
                                key={product.id}
                                name={product.product_name}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                brand={product.brand}
                                category={product.category}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            }
        </div>
    )
}

export default Home
